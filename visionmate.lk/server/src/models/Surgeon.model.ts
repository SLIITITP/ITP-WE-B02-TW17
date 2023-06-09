import { DUser, IUser } from "./User.model";

interface Education {
    school: string;
    degree: string;
    year: number;
}

interface CommonAttributes {
    about?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zipCode?: string;
    isActive?: boolean;
}

export interface DSurgeon extends CommonAttributes, DUser {
    surgeriesPerformed?: number;
    specialties?: string[];
    education?: Education[];
    status?: string;
}

export interface ISurgeon extends CommonAttributes, IUser {
    surgeriesPerformed?: number;
    specialties?: string[];
    education?: Education[];
    status?: string;
}
