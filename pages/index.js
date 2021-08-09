import { google } from 'googleapis';
import React from 'react';
import Layout from '../src/components/Layout/Layout';
import Main from '../src/components/main/Main';

const oxygenList = [];
const COLUMNS = [];

export default function Home({entities, servicesproviders}) {
  return (
    <Layout>
      <Main entities={entities} servicesproviders={servicesproviders} COLUMNS={COLUMNS} />
    </Layout>
  );
}

export async function getServerSideProps(){
  const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY || '{ privateKey: null }')
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    projectId: process.env.GOOGLE_PROJECTID,
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
  })

  const sheets = google.sheets({ version: 'v4', auth});

  const responseEntities = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'A1:L34',
  });

  const responseServiceProvider = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'servicesproviders!A1:I28',
  });

  // console.log("1",responseEntities.data.values);
  // console.log("2",responseServiceProvider.data.values);

  let entity_coulumns = responseEntities.data.values[0];
  for( var i = 0; i < entity_coulumns.length; i++){
    // let entity_coulumns[i] 
    let column = {
      Header : entity_coulumns[i],
      accessor : entity_coulumns[i],
    }
    COLUMNS.push(column)
  }
  
  let serviceproviderColumns =  responseServiceProvider.data.values[0];
  for( var i = 0; i < serviceproviderColumns.length; i++){
    let column = {
      Header : serviceproviderColumns[i],
      accessor : serviceproviderColumns[i],
    }
    COLUMNS.push(column)
  }

  for( var i = 1 ; i < 5; i++){
    let entities =  responseEntities.data.values[i];

    let oxygenObj = {
      id: i,
    };

    for(var j = 0 ; j < entities.length ; j++){
      oxygenObj[`${entity_coulumns[j]}`] = entities[j];
    }
    
    oxygenList.push(oxygenObj);
  }

  console.log("list",oxygenList)
  for( var i = 1 ; i < 5; i++){
    let serviceProviders =  responseServiceProvider.data.values[i];
    console.log(serviceproviderColumns);
    console.log(serviceProviders);

  }
  
  return {
    props: {
      entities: responseEntities.data.values, 
      servicesproviders: responseServiceProvider.data.values
    }
  }
}