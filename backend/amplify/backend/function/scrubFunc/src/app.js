/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require(
  "aws-serverless-express/middleware",
);

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.post("/api/v001/scrub", function (req, res) {
  // Get the data and the extension off
  // the body.
  const { data, ext } = req.body;

  // Ensure they're both defined.
  if (data === undefined || ext === undefined) {
    res.status(400).json({
      "success": false,
      "message": "missing required field",
      "data": "none",
    });
    return;
  }

  // Validate the base64 payload.
  //
  // Source: https://stackoverflow.com/questions/475074/regex-to-parse-or-validate-base64-data
  const regex =
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

  if (!regex.test(data)) {
    res.status(400).json({
      "success": false,
      "message": `invalid base64 data`,
    });
    return;
  }

  // Send back a successful response.
  res.status(200).json({
    "success": true,
    "message": "image scrubbing finished successfully",
    "data": data,
  });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
