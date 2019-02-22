## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run start-ns`

Runs the app in the development mode but will not initially run the `build:semantic` command on first start up.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run build:cordova` && `npm run build:cordova:win`

Builds the app for production for Cordova by appending Cordova specific tags to the built index.html by using the `_inject-cordova.js` script.

### `npm run build:semantic` && `npm run build:semantic:win`

Runs and builds the Semantic UI CSS and assets to be used in the app.

### `npm run watch:semantic`

Watches for any CSS changes related to the Semantic UI theme and will rebuild on the fly.

### `npm run remove:www` && `npm run remove:www:win`

Simply removes the `www/` directory.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Development

After pulling down the repository run the following `npm install && cordova prepare` to install all the dependencies and prepare the cordova targerted platforms.

### **Web**

To run in development mode:

`npm start`

### **iOS & Android**

**Note: You need to install SDKs for each platform that you wish to target. Read this to check what requirements need to be satisfied: https://cordova.apache.org/docs/en/latest/guide/cli/index.html#install-pre-requisites-for-building Generally you will have to install Android Studio, XCode, SDKs, emulators, build systems, etc.**

To create a build for either platform run:

`npm run build:cordova`

To run the app on a simulator:

`cordova emulate ios`

`cordova emulate android`

To run the app on a device:

`cordova run ios`

`cordova run android`

## Deployment

### **Web**

To create a production build:

`npm run build`

To run the production build:

`npm run server`

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

See additional information on how to serve the web app at this [link](https://facebook.github.io/create-react-app/docs/deployment).

### **iOS**

To prepare for distribution on the Apple App Store, you need to create an archive. In Xcode make sure the app is properly provisioned and signed for distribution. Next run `npm run build:cordova` followed by `cordova prepare` to copy any assets and plugins. Then in Xcode, ensure the version and build numbers are properly set and choose a generic device target from the Scheme toolbar menu. Then choose `Product > Archive`. If there is an issue uploading to the App Store from the Archives window one can try to instead export the archive and upload it via Application Loader.

### **Android**

To prepare for distribution on the Google Play Store, run `npm run build:cordova` followed by `cordova build android --release` which will result in an APK that needs to be signed. Then run:

`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore android.keystore app-release-unsigned.apk alias-name`

where `android.keystore` is the location of the `keystore` and `alias-name` is the alias for your key. Make sure you have Android Studio installed because it will also come with the zipalign tool. For Mac OS you can find it in `~/Library/Android/sdk/build-tools/{version}/zipalign`. Then run:

`~/Library/Android/sdk/build-tools/{version}/zipalign -v 4 app-release-unsigned.apk release.apk`

followed by uploading the build to the Google Play Console.
