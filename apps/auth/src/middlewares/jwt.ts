import koaJwt from 'koa-jwt';
import { jwtSecret } from '../utils';

export const jwtVal = koaJwt({
  secret: jwtSecret, // Should not be hardcoded
});
