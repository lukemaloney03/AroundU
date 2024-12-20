import buildRoutes from '@/utils/buildRoutes';
import authenticationHandler from '@/middleware/auth';
import {
  validateSignIn,
  validateSignOut,
  validateSignUp,
} from '@/validators/auth';
import {
  processSignIn,
  processSignOut,
  processSignUp,
} from '@/controllers/auth';

const authRoutes = buildRoutes([
  {
    method: 'get',
    path: '',
    validator: (_req, _res, next) => next(),
    middleware: [],
    controller: (req, res) => {
      res.status(200).json({ data: !!req.session.userId });
    },
  },
  {
    method: 'post',
    path: '/sign-up',
    validator: validateSignUp,
    middleware: [],
    controller: processSignUp,
  },
  {
    method: 'post',
    path: '/sign-in',
    validator: validateSignIn,
    middleware: [],
    controller: processSignIn,
  },
  {
    method: 'post',
    path: '/sign-out',
    validator: validateSignOut,
    middleware: [authenticationHandler],
    controller: processSignOut,
  },
]);

export default authRoutes;
