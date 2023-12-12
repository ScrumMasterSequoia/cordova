// to use this prebuild file, uncomment down to the big gap below and uncomment the necessary line in the cordova.js file. Then debug the error. TODO



// const path = require('path');
// const { exec } = require('child_process');
// const fs = require('fs');
// const rimraf = require('rimraf').rimraf;
// const buildFolderPath =  '../build/';
// const outputFolderPath ='../www/';

// function renameOutputFolder(buildFolderPath, outputFolderPath) {
//     return new Promise((resolve, reject) => {
//         fs.rename(buildFolderPath, outputFolderPath, (err) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve('Successfully built!');
//             }
//         });
//     });
// }

// function execPostReactBuild(buildFolderPath, outputFolderPath) {
//     return new Promise((resolve, reject) => {
//         if (fs.existsSync(buildFolderPath)) {
//             if (fs.existsSync(outputFolderPath)) {
//                 rimraf(outputFolderPath).then((err) => {// successfully deletes build but doesn't put contents into www and throws error
//                     if (err) {
//                         reject(err);
//                         return;
//                     }

//                     renameOutputFolder(buildFolderPath, outputFolderPath)
//                         .then(val => resolve(val))
//                         .catch(e => reject(e));
//                 });
//             } else {
//                 renameOutputFolder(buildFolderPath, outputFolderPath)
//                     .then(val => resolve(val))
//                     .catch(e => reject(e));
//             }
//         } else {
//             reject(new Error('build folder does not exist'));
//         }
//     });
// }

// module.exports = () => {
//     const projectPath = path.resolve(process.cwd(), './node_modules/.bin/react-scripts');
//     return new Promise((resolve, reject) => {
//         exec(`${projectPath} build`,
//             (error) => {
//                 if (error) {
//                     console.error(error);
//                     reject(error);
//                     return;
//                 }
//                 execPostReactBuild(path.resolve(__dirname, '../build/'), path.join(__dirname, '../www/'))
//                     .then((s) => {
//                         console.log(s);
//                         resolve(s);
//                     })
//                     .catch((e) => {
//                         console.error(e);
//                         reject(e);
//                     });
//             });
//     });
// };
















// 7. Now that the hook is defined, create a scripts folder within the project directory i.e. cordovaReactProject/ in this case. Within the scripts folder create a prebuild.js file as well.

// In this file we need to perform two main functions:

// Execute the react build process
// React-scripts generates the build output to the build/ folder and cordova uses www/ as its input directory. So once the react build is completed we need to rename build/ to www/
// I’ve used an additional rimraf module in my cordova hook, to install that:

// $ cd cordovaReactProject
// $ npm i rimraf --save


// I ran the npm build command and did not manually change it to www because i thought the above code would handle that for me.


// If you are planning to use react-router-dom for routing in the app, use <HashRouter> instead of <BrowserRouter>
// While accessing the cordova object access it using the window object, or else the react build would throw an undefined variable exception. For .e.g if you are using the local notification plugin ( plugin link ), instead of using it as:
// cordova.plugins.notification.local.schedule({
//     ....
// });
// access it using the window object:

// window.cordova.plugins.notification.local.schedule({
//     ....
// });
// There are other approaches of setting up a project with this configuration, I’ve used this particular approach as seting up a react project from scratch can be a challenging task.

// It involves installing npm modules, creating configurations amongst other things. Doing all of this inside a cordova project adds some complexity. Using create-react-app solves a lot of these problems.

// https://github.com/pshubham95/cordova-react-example 