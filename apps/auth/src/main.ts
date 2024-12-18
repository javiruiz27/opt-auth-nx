import koa from 'koa';
import router from './routes';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = new koa();
app.use(
  cors({
    origin: '*',
    credentials: true,
    headers: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
