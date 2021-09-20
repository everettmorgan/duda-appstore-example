export default function markup(about, auth) {
  return `
    <style>
      table, th, td {
        border: 1px solid black;
      }

      #container {
        font-family: sans-serif; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        background-color: white; 
        height: 100%; 
        width: 100%; 
        flex-direction: column;
      }
    </style>
    <div id="container">
      <h3>Site</h3>
      <table>
        <tr>
          <td>Name</td> <td style="text-align: center;">${about.site_name}</td>
        </tr>
        <tr>
          <td>Plan</td> <td style="text-align: center;">${about.plan_uuid}</td>
        </tr>
        <tr>
          <td>Term</td> <td style="text-align: center;">${about.recurrency}</td>
        </tr>
        <tr>
          <td>API</td> <td style="text-align: center;">${about.api_endpoint}</td>
        </tr>
      </table>

      <h3>Authorization</h3>
      <table>
        <tr>
          <td>Type</td> <td style="text-align: center;">${auth.type}</td>
        </tr>
        <tr>
          <td>Token</td> <td style="text-align: center;">${auth.authorization_code}</td>
        </tr>
        <tr>
          <td>Refresh</td> <td style="text-align: center;">${auth.refresh_token}</td>
        </tr>
        <tr>
          <td>Expires</td> <td style="text-align: center;">${new Date(auth.expiration_date).toISOString()}</td>
        </tr>
      </table>
    </div>
  `
}