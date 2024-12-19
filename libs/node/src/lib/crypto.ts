import {randomBytes} from 'crypto';

export const generateOTP = (numberBytes: number) => {
    return randomBytes(numberBytes).toString('hex'); // Generates a 6-character OTP
};