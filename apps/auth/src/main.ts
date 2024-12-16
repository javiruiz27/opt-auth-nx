import koa from 'koa';
import router from "./routes";
import bodyParser from 'koa-bodyparser';
import cors from "koa-cors"
import jwtMiddleware from 'koa-jwt';


const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 8080;
const secretKey = 'your-secret-key';

const app = new koa();
app.use(cors({
  origin: '*',
  credentials: true,
  headers: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
app.use(jwtMiddleware({
  secret: secretKey,
  passthrough: true,
}));
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

