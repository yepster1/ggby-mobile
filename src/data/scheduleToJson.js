const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const util = require('util');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const TOKEN_PATH = '../token.json';

const storeLocation = "assets/json/stagingEvents.json"

if (process.argv[2] != null) {
  storeLocation =process.argv[2]
}

// Load client secrets from a local file.
fs.readFile('creds/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  return authorize(JSON.parse(content), getDatas);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    return callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function getDatas(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const startRow = 2;
  const endRow = 16;
  const sheet = "Sheet1"

  return sheets.spreadsheets.values.get({
    spreadsheetId: '1njYeruKjnxLk7trRv7WbyMzjCVSex6AcWVYDwU7cWUA',
    range: sheet + '!' + startRow + ':' + endRow + '',
  }, (err, res) => {
        if (err) return console.log('The API returned an error: ' + err);
        return formatData(res);
    }
  );
}

function formatData(res) {
  //the row and collumn that the date and times are stores
    var dateRow = 0;
    var timeCollumn = 0;

    //the data
    var data = res.data.values;

    //get the dates and times
    var dates = data[dateRow];
    var times = data.map(i => i[0]);

    //get rid of the first elements
    dates.shift();
    times.shift();

    var json = "{\n"
    var counter = 1;
    for (var i = dateRow+1; i < times.length + 1; i++) {
      for(var j = timeCollumn+1; j < dates.length + 1; j++) {
        if (data[i][j] != "" && data[i][j] != undefined) {
          data[i][j] = data[i][j].replace(/(\r\n\t|\n|\r\t)/gm,"");
          jsonFormatter = "\t{\n\t\t\"id\": %d,\n\t\t\"date\": \"%s\",\n\t\t\"Times\": \"%s\",\n\t\t\"Title\": \"%s\",\n\t\t\"Details\": \"%s\",\n\t\t\"PicUrl\": \"%s\",\n\t\t\"Location\": \"%s\"\n\t},\n"
          json += util.format(jsonFormatter, counter++, dates[j-1], times[i-1], data[i][j], '', '', '')
        }
      }
    }
    json += "}"
    console.log(json)
    fs.writeFile(storeLocation, json, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
    }); 
  }

