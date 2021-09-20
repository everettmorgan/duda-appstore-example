// DO NOT DELETE: this file is used to create an NGROK tunnel for the frontend Vue application. 
const ngrok = require('ngrok');

(async function() {
  const url = await ngrok.connect(9000);
  console.log(`Base SSO URL: ${url}/`);
})();