import koaRouter from "koa-router";
import crypto from "crypto";
const jwt = require('koa-jwt');

const router = new koaRouter();

router.get("hello", "/", (ctx) => {
    ctx.body = "<h1>Hello</h1>";
});

router.post('/otp/generate', async (ctx, next) => {
    const otp = crypto.randomBytes(2).toString('hex');
    const email = ctx.request.body;
    //set in context state temporally
    ctx.state[email] = otp;
    ctx.body = { otp };
    console.log("hola", ctx.state[email]);
});

router.post('/otp/verify', async (ctx, next) => {
    const userOtp = ctx.request.body.otp;
    const storedOtp = "927100b8f1ee"; //await getStoredOtp(ctx.state.user.id); // retrieve stored OTP
    if (userOtp === storedOtp) {
      const token = jwt.sign({ userId: ctx.state.user.id }, 'your-secret-key', { expiresIn: '1h' });
      ctx.body = { token };
    } else {
      ctx.status = 401;
      ctx.body = { error: 'Invalid OTP' };
    }
});

export default router;
