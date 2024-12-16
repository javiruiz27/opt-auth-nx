import koaRouter from "koa-router";
import crypto from "crypto";
import jwt from 'jsonwebtoken';

const router = new koaRouter();

router.get("hello", "/", (ctx) => {
    ctx.body = "<h1>Hello</h1>";
});

router.post('/otp/generate', async (ctx, next) => {
    const otp = crypto.randomBytes(2).toString('hex');
    const email = ctx.request.body;
    //set in context state temporally
    ctx.state.users = email;
    ctx.body = { otp };
});

router.post('/otp/verify', async (ctx, next) => {
    const { otp: userOtp, email } = ctx.request.body;
    
    /*const storedOtp = ctx.state.users;  // retrieve stored OTP
    console.log("🚀 ~ router.post ~ storedOtp:", storedOtp)*/

    /*if (userOtp === storedOtp) {
      
    } else {
      ctx.status = 401;
      ctx.body = { error: 'Invalid OTP' };
    }*/
      const token = jwt.sign({ user: email }, 'your-secret-key', { expiresIn: '1h' });
      ctx.body = { token };
});

export default router;
