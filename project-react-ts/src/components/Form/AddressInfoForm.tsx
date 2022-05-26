import React, {useState} from "react";
import { GeneralWrapper } from "../../styled-components/components/Wrapper";
import { TextInForm } from "../../styled-components/components/Text";
import { IInfoInputs, ADDRESS_INFO_INPUTS } from "../../mock-data/FormInputs";
import { FormInput } from "./FormInput";

export const AddressInfo = () => {
    const [ addressInfo, setAddressInfo ] = useState( {
        country: "",
        city: "",
        street: "",
        apartment: "",
        suite: "",
        postcode: "",
    } );

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddressInfo( { ...addressInfo, [ e.target.name ]: e.target.value } );
    };

    console.log( addressInfo );

    return (
        <>
            <GeneralWrapper
                marginBottom = { 32 }
            >
                <TextInForm>
                    Address
                </TextInForm>
                { ADDRESS_INFO_INPUTS.map( ( input: IInfoInputs ) => (
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