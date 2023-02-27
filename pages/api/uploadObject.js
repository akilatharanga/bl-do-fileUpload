// import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import fs from "fs"

// //the s3client funtion validates the request and derects it to specified endpoint using the aws sdk
// const s3Client = new S3Client({
//     endpoint: "https://bltest.sgp1.digitaloceanspaces.com",
//     forcePathStyle: false,
//     region: "sgp1",
//     credentials: {
//         accessKeyId: "DO00YG7HQDK2YPFL3K4A",
//         secretAccessKey:"YGDvVx5f3pr/rWgo/VFspEmyDxxko5pWHi0HSL0TKa0"
//     }
// });

// //define parameters for the object want yo upload
// const params = {
//     Bucket: "bltest",
//     Key: "uploaded_object",
//     Body: "Hello World",
//     ACL: "public-read"
// }

// //define a function that uploads the object using sdk's putobjectcommand object and catches any errors
// const uploadObject = async () => {
//     try {
//         const data = await s3Client.send(new PutObjectCommand(params));
//         console.log("successfully uploaded object: " + params.Bucket + "/" + params.Key);
//         return data;
//     } catch (err) {
//         console.log("Error", err);
//     }
// }

// export { uploadObject }