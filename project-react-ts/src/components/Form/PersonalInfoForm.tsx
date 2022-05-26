import React, {useState} from "react";
import { TextInForm } from "../styled-components/components/Text";
import { IPersonalInfoInputs, PERSONAL_INFO_INPUTS } from "../components/Form/PersonalInfo";
import { FormInput } from "../components/Form/FormInput";

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

    console.log( personalInfo );

    return (
        <>
            <TextInForm>
                Personal information
            </TextInForm>
            { PERSONAL_INFO_INPUTS.map( ( input: IPersonalInfoInputs ) => (
                <FormInput
                    key = { input.id }
                    // value = { personalInfo[input.name] }
                    { ...input }
                    onChange = { HandleChange }
                />
            ) ) }
        </>
    );
};