import { google } from 'googleapis';

const mapPathToService = {
  o2_buy: 'အောက်ဆီဂျင်ရှာမယ်',
  o2_refill: 'အောက်ဆီဂျင်ဖြည့်မယ်',
  o2_rent: 'အောက်ဆီဂျင်အငှါး',
  lab: 'သွေးစစ်မယ်',
  med: 'ဆေးဝယ်မယ်'
};

export const getDataByService = async (service) => {
  let filteredOxygenList = [];
  const oxygenList = [];
  const COLUMNS = [];
  const services = [];
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

  // getting the entity column
  let entity_coulumns = responseEntities.data.values[0];
  for( var i = 0; i < entity_coulumns.length; i++){
    if (entity_coulumns[i] !== "နောက်ဆုံးအတည်ပြုချိန်") {
      if (["အမည်", "မှတ်ချက်"].includes(entity_coulumns[i])) {
        let column = {
          Header : 'E' + entity_coulumns[i],
          accessor : 'E' + entity_coulumns[i],
        }

        COLUMNS.push(column)
      } else {
        let column = {
          Header : entity_coulumns[i],
          accessor : entity_coulumns[i],
        }

        COLUMNS.push(column)
      }
    }
  }
  
  // getting the service provider column
  let serviceproviderColumns =  responseServiceProvider.data.values[0];
  for( var i = 0; i < serviceproviderColumns.length; i++){
    let column = {
      Header : serviceproviderColumns[i],
      accessor : serviceproviderColumns[i],
    }
    COLUMNS.push(column)
  }

  for(var i = 1; i < responseEntities.data.values.length; i++){
    let entity =  responseEntities.data.values[i];

    let oxygenObj = {
      id: i,
    };

    for(var j = 0 ; j < entity.length ; j++){
      if (entity_coulumns[i] !== "နောက်ဆုံးအတည်ပြုချိန်") {
        oxygenObj[`${entity_coulumns[j]}`] = entity[j];
      }
    }

    // get provider for the entity
    let provider = responseServiceProvider.data.values.filter(provider => provider[0] === entity[0]);
    
    for(var j = 0 ; j < provider.length ; j++){
      for(var k = 0 ; k < serviceproviderColumns.length ; k++){
        oxygenObj[`${serviceproviderColumns[k]}`] = provider[j][k] ? provider[j][k] : '';
      }

      if (oxygenObj.publish === 'TRUE' && oxygenObj.isActive === 'TRUE') {
        oxygenList.push(oxygenObj);
      }
    }
  }

  console.log(oxygenList);

  filteredOxygenList = oxygenList.filter(function (provider){
    return provider.ဝန်ဆောင်မှုအမျိုးအစား === mapPathToService[service];
  });

  return { filteredOxygenList, columns: COLUMNS};
}