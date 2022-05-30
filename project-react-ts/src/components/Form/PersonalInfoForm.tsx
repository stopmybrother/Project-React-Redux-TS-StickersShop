import React, { useState } from "react";
import { GeneralWrapper } from "../../styled-components/components/Wrapper";
import { TextInForm } from "../../styled-components/components/Text";
import { IInfoInputs, PERSONAL_INFO_INPUTS } from "../../constants/FormInputs";
import { FormInput } from "./FormInput";

export const PersonalInfo = () => {
    const [ personalInfo, setPersonalInfo ] = useState( {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    } );
    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfo( { ...personalInfo, [ e.target.name ]: e.target.value } );
    };
    return (
        <>
            <GeneralWrapper
                marginBottom = { 32 }
            >
                <TextInForm>
                    Personal information
                </TextInForm>
                { PERSONAL_INFO_INPUTS.map( ( input: IInfoInputs ) => (
                    <FormInput
                        key = { input.id }
                        { ...input }
                        onChange = { HandleChange }
                    />
                ) ) }
            </GeneralWrapper>
        </>
    );
};