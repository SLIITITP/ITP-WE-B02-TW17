import {NextFunction, Request, Response} from "express";
import * as StaffscheduleDao from "../dao/Staffschedule.dao";
import { SignedUpAs } from "../enums/auth";
import { DStaffSchedule } from "../models/StaffSchedule.model";

export async function register(req: Request, res: Response, next: NextFunction) {
    const {role, sid, schedule, patient, time} = req.body;
    const data: DStaffSchedule = {
        lastLoggedIn: undefined,
        sid: sid,
        schedule: schedule,
        patient: patient,
        time: time,
        signedUpAs: SignedUpAs.EMAIL,
    };
    StaffscheduleDao.createSchedule(data, !!req.body.remember).then(async token => {
        res.sendSuccess(token);
    }).catch(next);
}
