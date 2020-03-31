import express, {Router, Request, Response, NextFunction} from 'express';
import {authGuard} from '../auth';
import client from '../redis-client';
import {Daily} from '../models/daily.model';

export const router: Router = express.Router();

router.post(
  '/',
  authGuard,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // currently doesn't check for validity of the daily structure, but doesn't break. hooray!
      const daily: Daily = req.body;
      await client.setAsync('daily', JSON.stringify(daily));
      return res.send('success');
    } catch (e) {
      next(e);
    }
  }
);

// get the current daily
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const success: string = await client.getAsync('daily');
    return res.status(200).json(JSON.parse(success));
  } catch (e) {
    next(e);
  }
});
