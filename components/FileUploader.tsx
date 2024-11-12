"use client"
import React, { useEffect, useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import useUpload from '@/hooks/useUpload'
import {CircleArrowDown,CircleArrowUp} from 'lucide-react';
import { useRouter } from 'next/navigation';


function FileUploader() {
    const {progress, status, fileId, handleUpload} = useUpload();

    const router= useRouter();
  
    useEffect(()=>{
      if(fileId){
        router.push(`/dashboard/upload/${fileId}`);
      }
    },[fileId,router]);
  
    
      const onDrop = useCallback(async(acceptedFiles:File[]) => {
      // Do something with the files
      const file=acceptedFiles[0];
      if(file){
        //file upload
        await handleUpload(file)
      } else {
        //err
      }
    }, []);
  
  
  
    const {getRootProps, getInputProps, isDragActive, isFocused, isDragAccept} = useDropzone({
      onDrop,
      maxFiles:1,
      accept:{
        "application/pdf":[".pdf"],
      }
    })
  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-7xl mx-auto">
        <div {...getRootProps()} className={`p-10 border-2 border-dashed mt-10 rounded-xl w-[80%] flex items-center justify-center border-gray-700 h-80 text-black
            ${isFocused || isDragAccept ? 'bg-blue-400' : 'bg-blue-100'}`}>
          <input {...getInputProps()} />

          <div className="flex flex-col justify-center items-center gap-3">
          {
            isDragActive ?
            (<>
                <CircleArrowUp className="h-20 w-20 text-gray-500 animate-ping"/>
                <p>Drop the files here ...</p>
            </>):
            (<>
            <CircleArrowDown className="h-20 w-20 text-gray-500"/>
              <p>Drag n drop some files here, or click to select files</p>
            </>)  
          }
          </div>
        </div>   
    </div>      
  
  )
}

export default FileUploader