# 0.2.2-blm-platform

## Backend

### Dependencies

This project uses [AWS Amplify](https://aws.amazon.com/amplify/) as it's backend.
To run this project ensure you have the [AWS Amplify CLI](https://docs.amplify.aws/cli) installed and configured.

### Getting the source code

1. Use `git clone` to clone this repo.

```shell
git clone https://github.com/MLH-Fellowship/0.2.2-blm-platform.git blm
```

2. `cd` into the amplify backend

```
cd blm/backend
```

3. Use `amplify` to init the project.

```
amplify init
```

4. When asked to use the existing environment, select "Y".

5. After `amplify init` finishes a `src/aws-exports.js` file should appear in the cwd.

6. You can use this file by `import`-ing it in your js code.

```js
// From:
// https://docs.amplify.aws/lib/restapi/getting-started/q/platform/js#configure-your-application


import Amplify, { API } from 'aws-amplify';  // `npm install aws-amplify`
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
```

7. Use the following snippet to call the API

```js
// Adapted from:
// https://docs.amplify.aws/lib/restapi/update/q/platform/js#post-data
async function postData() {
    const apiName = 'scrubber';
    const path = '/api/v001/scrub';
    const myInit = {
        body: {
          "data": "" // base64 image data
          "ext": "" // file extension of image
        },
        headers: {
          "Content-Type": "application/json",
        },
    };

    return await API.post(apiName, path, myInit);
}

postData();
```
