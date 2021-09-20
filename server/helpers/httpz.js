import https from 'https';

function httpz(opts, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(opts, function(res) {
      let data = '';
  
      res.on('data', (d) => data += d);
  
      res.on('error', (e) => reject(e));
  
      res.on('end', function() {
        console.log(res.statusCode);
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          resolve(data);
        }
      })
    })

    if (body) {
      req.write(JSON.stringify(body));
    }

    req.end();
  })
}

export default httpz;