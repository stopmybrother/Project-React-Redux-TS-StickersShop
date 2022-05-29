import React, { useState } from "react";
import { GeneralWrapper, WrapperFlex } from "../../styled-components/components/Wrapper";
import { TextInForm } from "../../styled-components/components/Text";
import { SHIPPING_INFO_INPUTS } from "../../constants/FormInputs";
import { FormRadioInput } from "./FormRadioInput";

export const ShippingInfo = () => {
    const [ shippingInfo, setShippingInfo ] = useState( {
        delivery: "",
        pickUp: "",
    } );
    const [ selectedRadioInput, setSelectedRadioInput ] = useState( false );

    const isRadioSelected = ( value: boolean ): boolean => selectedRadioInput === value;

    const handleRadioClick = ( e: React.ChangeEvent<HTMLInputElement> ): void => {
        setSelectedRadioInput( e.currentTarget.checked );
        console.log(selectedRadioInput)
    };
    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShippingInfo( { ...shippingInfo, [ e.target.name ]: e.target.value } );
        console.log(shippingInfo)
    };
    return (
        <>
            <GeneralWrapper
                marginBottom = { 32 }
            >
                <TextInForm>
                    Shipping
                </TextInForm>
                <WrapperFlex
                    maxWidth = { 411 }
                >
                    {
                        SHIPPING_INFO_INPUTS.map( input => (
                            <FormRadioInput
                                key = { input.id }
                                checked = { isRadioSelected( !selectedRadioInput ) }
                                { ...input }
                                onChange = { handleRadioClick }
                            />
                        ) )
                    }
                </WrapperFlex>
            </GeneralWrapper>
        </>
    );
};