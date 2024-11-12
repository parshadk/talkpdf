import { initializeApp, getApps, App , getApp, cert} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore"; 

import serviceKey from '@/service_key.json';

let app: App;

if(getApps().length===0){
const servicekey=JSON.stringify(serviceKey);
    app=initializeApp({
        credential:cert(servicekey)
    })
} else {
    app= getApp();
}

const adminDB=getFirestore(app);
export { app as adminApp, adminDB};