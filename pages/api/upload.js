import fs from "fs";
import AWS from "aws-sdk";
import formidable from "formidable";

const s3Client = new AWS.S3({
  endpoint: process.env.DO_SPACES_URL,
  region: "sgp1",
  credentials: {
    accessKeyId: process.env.DOSPACES_ID,
    secretAccessKey: process.env.DOSPACES_SECRET,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable();
  // console.log(req);
  // console.log(res);
  form.parse(req, async (err, fields, files) => {
    if (!files.demo) {
      res.status(400).send("no file uploaded");
      return;
    }
    try {
      return s3Client.putObject(
        {
          Bucket: process.env.DOSPACES_BUCKET,
          Key: files.demo.originalFilename,
          Body: fs.createReadStream(files.demo.filepath),
          ACL: "public-read",
        },
        async () => res.status(201).send("File uploaded")
      );
    } catch (e) {
      console.log(e);
      res.status(500).send("Error uploading file");
    }
  });
}
