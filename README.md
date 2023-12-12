https://medium.com/@pshubham/using-react-with-cordova-f235de698cc3

npm run build
move the build folder into the www folder, then run
cordova run browser

once I have gotten the scripts/prebuild.js and config.xml files so that they can use rimraf, I won't have to separate the above steps and they should work fine, moving the files for me

To make the app run, comment out line three of the config.xml file and the rimraf sections of the prebuild.js file, then do the above three steps (lines 3,4,5 herein)

Apache cordova is a mobile application development framework which can be used to build hybrid (cross platform) mobile apps using web technologies like HTML, Javascript. A single code base can be built to run on different platforms like android, ios and windows.

