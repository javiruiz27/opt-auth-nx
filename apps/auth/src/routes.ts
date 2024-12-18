import koaRouter from 'koa-router';
import jwt from 'jsonwebtoken';
import { generateOTP, sendOTPEmail } from '@onboarding/otp/feature';
import { jwtSecret } from './utils';
import { jwtVal } from './middlewares/index';

const router = new koaRouter();

router.get('hello', '/', (ctx) => {
  ctx.body = '<h1>Hello</h1>';
});

router.get('/data', jwtVal, async (ctx) => {
  ctx.body = '<h1>hh</h1>';
});

router.post('/otp/generate', async (ctx, next) => {
  const otp = generateOTP(2);
  const { email } = ctx.request.body;

  ctx.app.user = { email: email, otp }; //save temporally in memory

  await sendOTPEmail(email, otp);
  ctx.body = { message: 'OTP sent to your email' };

  next();
});

router.post('/otp/verify', async (ctx, next) => {
  const { otp: userOtp, email } = ctx.request.body;
  const storedOtp = ctx.app.user?.otp ?? ''; // retrieve stored OTP

  if (userOtp === storedOtp) {
    const token = jwt.sign({ user: email }, jwtSecret, {
      expiresIn: '1h',
    });
    ctx.body = { token };
  } else {
    ctx.status = 401;
    ctx.body = { error: 'Invalid OTP' };
  }
  next();
});

export default router;
