import { NextFunction, Request, Response } from "express";
import { AppLogger } from "../utils/logging";
import passport from "passport";
import createHttpError from "http-errors";

export class Authentication {
    public static verifyToken(req: Request, res: Response, next: NextFunction) {
        return passport.authenticate('jwt', {session: false}, (err: any, user: any, info: any) => {
            if (err || !user) {
                AppLogger.error(`Login Failed, Reason -> ${info}`);
                throw createHttpError(403, info)
            }
            req.user = user;
            req.body.user = user._id;
            AppLogger.info(`User Authenticated User ID: ${user._id}`);
            next();
        })(req, res, next);
    }
}
