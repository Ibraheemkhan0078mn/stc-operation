import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "kclf0sro",
  api_key: "368376285567534",
  api_secret: "Y28H-0o0wpqTvkGWaYGftkNZbk0",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "stc/images",
  },
});

const upload = multer({ storage });

export default upload;