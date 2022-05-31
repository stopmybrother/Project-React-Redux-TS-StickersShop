import React from "react";

export interface IInfoInputs {
    id: number;
    name: string;
    type?: string;
    placeholder?: string;
    pattern?: string;
    errorMessage?: string;
    label: string;
    checked?: boolean;
};

export const PERSONAL_INFO_INPUTS: IInfoInputs[] = [
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
];

export const SHIPPING_INFO_INPUTS: IInfoInputs[] = [
    {
        id: 21,
        name: "delivery",
        label: "Next day delivery",
        checked: false,
    },
    {
        id: 22,
        name: "pickUp",
        label: "Pick up in-store",
        checked: false,
    },
]

export const ADDRESS_INFO_INPUTS: IInfoInputs[] = [
    {
        id: 31,
        name: "country",
        type: "text",
        placeholder: "Enter country where you live",
        pattern: "^[A-Za-z]{2,16}$",
        errorMessage: "Country should contain 2-16 letters and shouldn't include any special character",
        label: "Country",
    },
    {
        id: 32,
        name: "city",
        type: "text",
        placeholder: "Enter city where you live",
        pattern: "^[A-Za-z]{2,16}$",
        errorMessage: "City should contain 2-16 letters and shouldn't include any special character",
        label: "City",
    },
    {
        id: 33,
        name: "street",
        type: "text",
        placeholder: "Enter street where you live",
        pattern: "^[A-Za-z]{2,16}$",
        errorMessage: "Street should contain 2-16 letters and shouldn't include any special character",
        label: "Street",
    },
    {
        id: 34,
        name: "apartment",
        type: "text",
        placeholder: "Enter number of your apartment",
        pattern: "^[0-9]{2,10}$",
        errorMessage: "Apartment with this number doesn't exist on this street",
        label: "Apartment",
    },
    {
        id: 35,
        name: "suite",
        type: "text",
        placeholder: "Enter number of your suite",
        pattern: "^[0-9]{2,10}$",
        errorMessage: "Suite with this number doesn't exist in this apartment",
        label: "Suite",
    },
    {
        id: 36,
        name: "postcode",
        type: "text",
        placeholder: "Enter postcode",
        pattern: "^[0-9]{6,6}$",
        errorMessage: "It should a valid postcode",
        label: "Postcode",
    },
];

export const PAYMENT_INFO_INPUTS: IInfoInputs[] = [
    {
        id: 51,
        name: "cardNumber",
        type: "text",
        placeholder: "1234 1234 1234 1234",
        pattern: "^[A-Z0-9]{16, 16}$",
        errorMessage: "It should contain 16 characters",
        label: "Number",
    },
    {
        id: 52,
        name: "cardHolder",
        type: "text",
        placeholder: "Enter your first and last name from card",
        pattern: "^[A-Za-z]{2,16}\\s{1,}[A-Za-z]{2,16}$",
        errorMessage: "It should include first and last name",
        label: "Card Holder",
    },
    {
        id: 53,
        name: "expiryDate",
        type: "text",
        placeholder: "12/20",
        pattern: "^[0-9]{2}[\\/]^[0-9]{2}",
        errorMessage: "It should be a valid date",
        label: "Expiry Date",
    },
    {
        id: 54,
        name: "cvc",
        type: "text",
        placeholder: "123",
        pattern: "^[0-9]{3,3}$",
        errorMessage: "It should be a valid CVC Code",
        label: "CVC Code",
    },
];