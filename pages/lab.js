import React from 'react';
import Layout from '../src/components/Layout/Layout';
import Main from '../src/components/main/Main';

import {getDataByService} from '../src/api/data';

export default function Home({entities, columns}) {

  return (
    <Layout>
      <Main entities={entities} columns={columns} />
    </Layout>
  );
}

export async function getServerSideProps(){
  const  { filteredOxygenList, columns} = await getDataByService('lab');

  return {
    props: {
      entities: filteredOxygenList, 
      columns: columns,
    }
  }
}