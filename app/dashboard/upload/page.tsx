"use client"
import React, {useCallback, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import useUpload from './../../../hooks/useUpload'
import {CircleArrowDown,CircleArrowUp} from 'lucide-react';
import { useRouter } from 'next/navigation';
import FileUploader from '@/components/FileUploader';

function UploadPage() {  

 
  return (

<div>
  <FileUploader/>
</div>
  )
}

export default UploadPage