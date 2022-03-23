import { Box, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import { Container } from './styles';
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { S3Client } from "@aws-sdk/client-s3";

// const S3_BUCKET = "ppgbuckettest";
const S3_BUCKET = "testeigao";
const REGION = "sa-east-1";

const config = {
  region: REGION,
  apiVersion: "latest",
  params: { Bucket: S3_BUCKET },
  credentials: {
    accessKeyId: "AKIAZAAQ4ILBZPXCO5YU",
    secretAccessKey: "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",
  },
};

const client = new S3Client(config);


function Upload() {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = async (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    const data = await client
      .send(new PutObjectCommand(params));
      // .on("httpUploadProgress", (evt) => {
      //   setProgress(Math.round((evt.loaded / evt.total) * 100));
      // })
      // .send((err) => {
      //   if (err) console.log(err);
      // });
    
    console.log(data);

    
  };


  return (
    <Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>Native SDK File Upload Progress is {progress}%</div>
          <input
            type="file"
            onChange={(e) => {
              setSelectedFile(e.target.files[0]);
            }}
          />
          <button onClick={() => uploadFile(selectedFile)}>
            {" "}
            Upload to S3
          </button>
        </Box>
      </Container>
    </Container>
  );
}

export default Upload;