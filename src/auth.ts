import {TOKEN} from './server';
import {NextFunction, Request, Response} from 'express';

export const authGuard = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.get('token');
  if (TOKEN === token) next();
  else {
    const error = new Error('Authentication required');
    res.status(401);
    next(error);
  }
};
