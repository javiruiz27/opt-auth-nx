import koaRouter from 'koa-router';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const router = new koaRouter();

router.get('hello', '/', (ctx) => {
  ctx.body = '<h1>Hello</h1>';
});

router.post('/otp/generate', async (ctx, next) => {
  const otp = crypto.randomBytes(2).toString('hex');
  const email = ctx.request.body;

  ctx.app.user = { email: email.email, otp };

  ctx.body = { otp };

  next();
});

router.post('/otp/verify', async (ctx, next) => {
  const { otp: userOtp, email } = ctx.request.body;
  console.log('users', ctx.app.user);

  const storedOtp = ctx.app.user?.otp ?? ''; // retrieve stored OTP

  if (userOtp === storedOtp) {
    const token = jwt.sign({ user: email }, 'your-secret-key', {
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
