import React, {useState} from "react";
import { GeneralWrapper } from "../../styled-components/components/Wrapper";
import { TextInForm } from "../../styled-components/components/Text";
import { IInfoInputs, PAYMENT_INFO_INPUTS } from "../../constants/FormInputs";
import { FormInput } from "./FormInput";

export const PaymentInfo = () => {
    const [ paymentInfo, setPaymentInfo ] = useState( {
        cardNumber: "",
        cardHolder: "",
        expiryDate: "",
        cvc: "",
    } );
    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentInfo( { ...paymentInfo, [ e.target.name ]: e.target.value } );
    };
    return (
        <>
            <GeneralWrapper
                marginBottom = { 32 }
            >
                <TextInForm>
                    Payment details
                </TextInForm>
                { PAYMENT_INFO_INPUTS.map( ( input: IInfoInputs ) => (
                    <FormInput
                        key = { input.id }
                        // value = { personalInfo[input.name] }
                        { ...input }
                        onChange = { HandleChange }
                    />
                ) ) }
            </GeneralWrapper>
        </>
    );
};