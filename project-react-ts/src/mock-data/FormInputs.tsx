import React from "react";

export interface IPersonalInfoInputs {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    pattern?: string;
    errorMessage: string;
    label: string;
};

export const PERSONAL_INFO_INPUTS: IPersonalInfoInputs[] = [
    {
        id: 11,
        name: "firstName",
        type: "text",
        placeholder: "Enter your first name",
        pattern: "^[A-Za-z]{2,16}$",
        errorMessage: "First Name should contain 2-16 letters and shouldn't include any special character",
        label: "First Name",
    },
    {
        id: 12,
        name: "lastName",
        type: "text",
        placeholder: "Enter your last name",
        pattern: "^[A-Za-z]{2,16}$",
        errorMessage: "Last Name should contain 2-16 characters and shouldn't include any special character",
        label: "Last Name",
    },
    {
        id: 13,
        name: "phone",
        type: "tel",
        placeholder: "+375 (__) ___-__-__",
        pattern: "\\s{0,}[\\+]\\s{0,}375\\s{0,}[\\(]\\d{2}[\\)]\\s{0,}\\d{3}[\\-]\\d{2}[\\-]\\d{2}",
        errorMessage: "It should be a valid telephone number",
        label: "Phone",
    },
    {
        id: 14,
        name: "email",
        type: "email",
        placeholder: "Enter your e-mail",
        pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
        errorMessage: "It should be a valid e-mail address",
        label: "Email",
    },
]