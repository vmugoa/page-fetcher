// CHALLENGE: PAGE DOWNLOADER

  // Implement a node app called fetcher.js.
  // It should take two command line arguments:

    // 1) a URL
    // 2) a local file path

  // It should download the resource at the URL to the local path on your machine. Upon completion, 
  // it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

  // Asynchronous Operations:
    // There are two operations in this problem which will take an unknown amount of time:
        // 1) You need to make an http request and wait for the response.
        // 2) After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.

const request = require('request');
const fs = require('fs');

// Let's take in command line arguments
const args = process.argv.slice(2); // slice, since we don't want to include 'node' and the file name in our args
const url = args[0];
const filePath = args[1];

// Let's make an HTTP request
request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML content.
  // Let's write a file based on our HTTP request
    fs.writeFile(filePath, ('body:', body), err => {
      if (err) {
        console.error(err);  // File written successfully, if no error occurs
      };
    // Let's get the file details - in this case, we want to know its size in bytes
      fs.stat(filePath, (err, stats) => {
        if (!err) {
          console.log(`Downloaded and saved ${stats.size} bytes to ${filePath}`);
        };
    });
  });
});
