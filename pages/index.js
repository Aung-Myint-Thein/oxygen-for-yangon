import { google } from 'googleapis';
import React from 'react';
import Layout from '../src/components/Layout/Layout';
import Main from '../src/components/main/Main';

export default function Home({entities, servicesproviders}) {
  return (
    <Layout>
      <Main entities={entities} servicesproviders={servicesproviders} />
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

  console.log(responseEntities.data.values);
  console.log(responseServiceProvider.data.values);
  
  return {
    props: {
      entities: responseEntities.data.values, 
      servicesproviders: responseServiceProvider.data.values
    }
  }
}