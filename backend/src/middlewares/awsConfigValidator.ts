import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const validateAWSConfig = (req: Request, res: Response, next: NextFunction) => {
    // Check required AWS environment variables
    const requiredEnvVars = [
        'AWS_REGION',
        'AWS_ACCESS_KEY_ID',
        'AWS_SECRET_ACCESS_KEY',
        'DYNAMODB_USERS_TABLE'
    ];

    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
        console.error('Missing required AWS environment variables:', missingVars);
        return res.status(500).json({
            message: 'Server configuration error',
            error: `Missing required AWS configuration: ${missingVars.join(', ')}`
        });
    }

    // Log current configuration (excluding sensitive data)
    console.log('Current AWS Configuration:', {
        region: process.env.AWS_REGION,
        hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
        hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
        userTable: process.env.DYNAMODB_USERS_TABLE
    });

    next();
};