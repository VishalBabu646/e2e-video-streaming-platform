import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  jwtSecret: string;
  jwtExpiry: number;
  aws: {
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
  };
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpiry: Number(process.env.JWT_EXPIRES_IN) || 1,
  aws: {
    region: process.env.AWS_REGION || "eu-north-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ""
  }
};

export default config;
