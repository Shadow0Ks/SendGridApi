const {onObjectFinalized} = require("firebase-functions/v2/storage");
const {initializeApp} = require("firebase-admin/app");
const {getStorage} = require("firebase-admin/storage");
const logger = require("firebase-functions/logger");
const path = require("path");

// library for image resizing
const sharp = require("sharp");

initializeApp();


const { Storage } = require('@google-cloud/storage');
const config = require('./config');
const storage = new Storage({ 'keyFilename': config.configFullPath('gcloud') });

const privateBucket = storage.bucket('my-bucket-45826813215'); 

let objectDownload = async (filename) => {
    let file = privateBucket.file(filename);
    let result = await file.download();
    return result;
}

objectDownload('some-object')
    .then(() => {
        console.log('Done');
    })
    .catch((err) => {
        console.log(err.message);
    });



  