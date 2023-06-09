import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { ITreatmentPlan } from "../models/TreatmentPlan.model";

const schemaOptions: mongoose.SchemaOptions = {
    _id: true,
    id: false,
    timestamps: true,
    skipVersioning: {
        updatedAt: true
    },
    strict: true,
    toJSON: {
        getters: true,
        virtuals: true,
    },
};

export const TreatmentPlanSchema = new mongoose.Schema({
    title: {
        type: Schema.Types.String,
        required: true,
    },
    description: {
        type: Schema.Types.String,
        required: true,
    },
    treatmentPlan: {
        type: Schema.Types.String,
        required: false,
    },
    startDate: {
        type: Schema.Types.Date,
        required: true,
    },
    endDate: {
        type: Schema.Types.Date,
        required: true,
    },
    patientId: {
        type: Schema.Types.ObjectId,
        required: false, // TODO: Change to true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        required: false, // TODO: Change to true
    },
    diagnosis: {
        type: Schema.Types.String,
        required: false,
    },
    medications: {
        type: Schema.Types.String,
        required: false,
    },
    procedures: {
        type: Schema.Types.String,
        required: false,
    },
    instructions: {
        type: Schema.Types.String,
        required: false,
    },
    referral: {
        type: Schema.Types.String,
        required: false,
    },
    progressNotes: {
        type: Schema.Types.String,
        required: false,
    },
}, schemaOptions);

const TreatmentPlan = mongoose.model<ITreatmentPlan>("treatment_plans", TreatmentPlanSchema);

export default TreatmentPlan;
