import { Express } from 'express';
import { PatientEp } from "../end-points/Patient.ep";

export function PatientRoutesInit(app: Express) {
    /* PUBLIC ROUTES ===================================== */
    // app.post('/api/public/patient-sample', PatientEp.sample());

    /* AUTH ROUTES ===================================== */
    // app.get('/api/auth/patient-sample', PatientEp.sample());

}
