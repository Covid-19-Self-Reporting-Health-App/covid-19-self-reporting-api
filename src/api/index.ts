import express, {Request, Response, NextFunction, Router} from 'express';
export const router: Router = express.Router();

import {router as dailyRouter} from './daily';
import {router as historyRouter} from './history';

router.use('/daily', dailyRouter);
router.use('/history', historyRouter);

router.use((req: Request, res: Response, next: NextFunction) => {
  const error: Error = new Error('Not Found');
  res.status(404);
  next(error);
});
