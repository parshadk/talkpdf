"use client"
import React, {useState} from "react";
import {useUser} from "@clerk/nextjs";

import {useRouter} from "next/navigation"
import {v4 as uuidv4} from "uuid";

import {db, storage} from "@/firebase";
import { ref, uploadBytesResumable , getDownloadURL } from "firebase/storage";
import { Firestore, setDoc ,doc} from "firebase/firestore";

export enum StatusText {
    UPLOADING="Uploading file",
    UPLOADED="File uploaded successfully",
    SAVING="Saving File to Database",
    GENERATING="Generating Output",
}

export type Status = StatusText[keyof StatusText];

function useUpload(){
 const [progress,setProgress]=useState<number |null>(null);
 const [fileId,setFileId]=useState<string |null>(null);
 const [ status, setStatus]=useState<Status|null>(null);
 const {user} = useUser();
 const router=useRouter();

 const handleUpload =async (file:File)=>{
    if(!file || !user) return;

    //add free limits


    const fileIdToUpload=uuidv4();

    const storageRef= ref(storage , `users/${user.id}/files/${fileIdToUpload}`);

    const uploadTask = uploadBytesResumable(storageRef,file);

    uploadTask.on("state_changed",(snapshot)=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        setProgress(progress);
    
        setStatus(StatusText.UPLOADING);
        setFileId(fileIdToUpload);
    
    },
    (error)=>{
        console.log("error uploading file",error);
    },
    async ()=>{
        setStatus(StatusText.UPLOADED);
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

        setStatus(StatusText.SAVING);
        await setDoc(doc(db,"users",user.id,"files",fileIdToUpload),{
            name:file.name,
            size:file.size,
            type:file.type,
            downloadUrl:downloadUrl,
            ref:uploadTask.snapshot.ref.fullPath,
            createdAt:new Date(),
            
        });
        setStatus(StatusText.GENERATING); 
        //generate output

        setFileId(fileIdToUpload);
        }
    );
   };
   return {
    progress,
    status,
    fileId,
    handleUpload
   };
 };



export default useUpload
