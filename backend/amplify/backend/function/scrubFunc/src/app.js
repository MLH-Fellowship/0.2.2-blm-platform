const express = require("express");
const bodyParser = require("body-parser");
const sharp = require("sharp");
const awsServerlessExpressMiddleware = require(
  "aws-serverless-express/middleware",
);

// declare a new express app
const app = express();
app.use(bodyParser.json({
  limit: "50mb",
}));

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

const isValidExtension = (ext) => {
  const supportedTypes = new Set(
    [
      ".jpg",
      ".jpeg",
      ".jpe",
      ".jif",
      ".jfif",
      ".jfi",
      ".tif",
      ".tiff",
    ],
  );
  const lowerCaseExt = String(ext).toLowerCase();
  const lowerCaseExtWDot = "." + lowerCaseExt;

  return supportedTypes.has(lowerCaseExt) ||
    supportedTypes.has(lowerCaseExtWDot);
};

app.post("/api/v001/scrub", async function (req, res) {
  // Get the data and the extension off
  // the body.
  const { data, ext } = req.body;

  // Ensure they're both defined.
  if (data === undefined || ext === undefined) {
    let dataMissingStr = "missing required field(s):";
    if (data === undefined) {
      dataMissingStr += " data";
    }
    if (ext === undefined) {
      dataMissingStr += " ext";
    }
    res.status(400).json({
      "success": false,
      "message": dataMissingStr,
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
      "data": "none",
    });
    return;
  }

  // Verify that we have a supported image type.
  if (!isValidExtension(ext)) {
    res.status(400).json({
      "success": false,
      "message": `unsupported file type ${ext}`,
      "data": "none",
    });
    return;
  }

  // Make a buffer from that data.
  // Then use that buffer to make a sharp.Image.
  const buf = Buffer.from(data, "base64");
  const image = sharp(buf);

  // Convert the image back into a buffer.
  // This essentially wipes out all metadata.
  let imgBuf = null;
  let err = null;

  try {
    imgBuf = await image.toBuffer();
  } catch (error) {
    err = error;
  }

  // If not successful, bail.
  if (err || !imgBuf) {
    res.status(400).json({
      "success": false,
      "message": `unable to decode image`,
      "data": "none",
    });
    return;
  }

  // Send back a successful response.
  res.status(200).json({
    "success": true,
    "message": "image scrubbing finished successfully",
    "data": imgBuf.toString("base64"),
  });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
