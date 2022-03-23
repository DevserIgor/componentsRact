import { Box, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import AWS from "aws-sdk";
import { Container } from './styles';

// const S3_BUCKET = "ppgbuckettest";
const S3_BUCKET = "testeigao";
const REGION = "sa-east-1";

AWS.config.update({
  accessKeyId: "AKIAZAAQ4ILBZPXCO5YU",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});


function Upload() {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
      });
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