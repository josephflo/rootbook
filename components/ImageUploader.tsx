"use client";

import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import { useRef, useState } from "react";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  const url = config.env.apiEndpoint;

  try {
    const response = await fetch(`${url}/api/imagekit`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }
    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error("Failed to authenticate request to ImageKit");
  }
};

const ImageUploader = ({onFileChange}:{onFileChange: (filePath :string)=>void}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);


  const onError = (error: any) => {
    console.log(error);
    toast({
      title: "Image Upload Failed",
      description: `Failed to upload image: ${error.message}`,
      variant: "destructive"
    });
  };

  const onSuccess = (res:any) => {
    setFile(res)
    onFileChange(res.filePath)
    
    toast({
      title: "Image uploaded successfully",
      description: `${res.filePath} uploaded successfully`,
    })
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />
      <button className="upload-btn" onClick={(e) =>{
        e.preventDefault();
        if(ikUploadRef.current){
          // @ts-ignore
          ikUploadRef.current.click();
        }
      }}>
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />

        <p className="text-base text-light-100">Upload a Image</p>

        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {
        file && (
          <IKImage
            alt={file.filePath}
            path={file.filePath}
            width={500}
            height={500}
          />
        )
      }
    </ImageKitProvider>
  );
};

export default ImageUploader;
