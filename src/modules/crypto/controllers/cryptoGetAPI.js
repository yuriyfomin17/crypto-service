import mongoose from 'mongoose';
import cryptoMongoModel from '../cryptoMongoModel';

const cron = require('node-cron');
const axios = require('axios');
const cryptoAndCurrencyArray = ["BTC","XRP", "ETH", "BCH", "EOS", "LTC", "XMR", "DASH","USD", "EUR", "GBP", "RUR", "CAD", "CHF", "NZD", "AUD", "JPY"];
const urlRequest = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoAndCurrencyArray.join(',')}&tsyms=${cryptoAndCurrencyArray.join(',')}`;

export async function cryptoGetAPI() {
  axios.get(urlRequest)
    .then(response => {
      for (let i = 0; i < cryptoAndCurrencyArray.length; i++) {
        const arrayInfo = [];

        const fsyms = cryptoAndCurrencyArray[i];
        for (let k = 0; k < cryptoAndCurrencyArray.length; k++) {
          const tsyms = cryptoAndCurrencyArray[k];
          // console.log(response.data['DISPLAY'][fsyms][tsyms]);
          const obj = {};
          obj['fsyms'] = fsyms;
          obj['tsyms'] = tsyms;
          obj['CHANGE24HOUR'] = response.data['DISPLAY'][fsyms][tsyms]['CHANGE24HOUR'];
          obj['OPEN24HOUR'] = response.data['DISPLAY'][fsyms][tsyms]['OPEN24HOUR'];
          obj['VOLUME24HOUR'] = response.data['DISPLAY'][fsyms][tsyms]['VOLUME24HOUR'];
          obj['VOLUME24HOURTO'] = response.data['DISPLAY'][fsyms][tsyms]['VOLUME24HOURTO'];
          obj['LOW24HOUR'] = response.data['DISPLAY'][fsyms][tsyms]['LOW24HOUR'];
          obj['HIGH24HOUR'] = response.data['DISPLAY'][fsyms][tsyms]['HIGH24HOUR'];
          obj['PRICE'] = response.data['DISPLAY'][fsyms][tsyms]['PRICE'];
          obj['SUPPLY'] = response.data['DISPLAY'][fsyms][tsyms]['SUPPLY'];
          obj['MKTCAP'] = response.data['DISPLAY'][fsyms][tsyms]['MKTCAP'];

          arrayInfo.push(obj);
        }
        const _id = new mongoose.Types.ObjectId();
        const timestamps = new Date();
        const crypto = new cryptoMongoModel({
          _id,
          timestamps,
          arrayInfo,
        });

        crypto.save().then(doc => {
          if (doc) {
            console.log('Success - Crypto Saved');
          } else {
            console.log('Fail = Crypto is not Saved');
          }
        })
          .catch(err => {
            console.log(err);
          });
      }


    })
    .catch(error => {
      console.log(error);
    });
}

export function getAPIInfo() {
  cron.schedule('*/1 * * * *', () => {
    console.log('running a task in 1 minute');
    cryptoGetAPI().then(r => console.log('Success'));
  });
}

