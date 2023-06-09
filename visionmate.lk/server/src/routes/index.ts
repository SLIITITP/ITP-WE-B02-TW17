import { Express, Request, Response } from "express";
import { AdminRoutesInit } from "./admin";
import { AppointmentRoutesInit } from "./appointment";
import { AuthRoutesInit } from "./auth";
import { PatientRoutesInit } from "./patient";
import createHttpError from "http-errors";
import { BlogRoutesInit } from "./blog";
import {SpectacleRoutesInit} from "./spectcle";
import {OrderRoutesInit} from "./order";
import { TreatmentPlanRoutesInit } from "./treatment-plan";
import {ScheduleRoutesInit} from "./schedule";

export function initRoutes(app: Express) {
    /* TOP LEVEL REQUESTS */
    app.get('/api', (req: Request, res: Response) => res.sendSuccess("VisionMate™ API"));

    AuthRoutesInit(app);
    AdminRoutesInit(app);
    PatientRoutesInit(app);
    BlogRoutesInit(app);
    SpectacleRoutesInit(app);
    AppointmentRoutesInit(app);
    OrderRoutesInit(app);
    TreatmentPlanRoutesInit(app);
    ScheduleRoutesInit(app);

    /* INVALID REQUESTS */
    app.get('/', (req: Request, res: Response) => res.redirect(301, "/api"));
    app.use((req, res, next) => next(new createHttpError.NotFound()));
    // app.all('*', (req: Request, res: Response) => res.send("Invalid Route").status(404));

}
