import React, { useState } from "react";
import styled from "styled-components";
import { GeneralWrapper, WrapperFlex, WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { TextInForm } from "../../styled-components/components/Text";
import { COLOR } from "../../styled-components/color-constants";
import { Text } from "../../styled-components/components/Text";
import { IInfoInputs, SHIPPING_INFO_INPUTS } from "../../mock-data/FormInputs";
import { FormRadioInput } from "./FormRadioInput";

const RadioSpan = styled.span`
  width: calc(100% - 3px);
  height: calc(100% - 3px);
  border-radius: 50%;
  background-color: ${ COLOR.charcoalPrimary };
  display: none;
`;
const Radio = styled.input.attrs( { type: "radio" } )`
  width: 12px;
  height: 12px;
`;

const Label = styled.label`
  margin-right: 10px;
  width: 13px;
  height: 11px;
  border: 1px solid ${ COLOR.charcoalOpacityTwenty };
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;
  &:hover {
    border: 1px solid ${ COLOR.charcoalOpacityFifty };
  }
  & input {
    display: none;
  }
  & input:checked + span {
    display: inline-block;
  }
`;

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
                                // value = { input.name }
                                checked = { isRadioSelected(!selectedRadioInput) }
                                // value = { personalInfo[input.name] }
                                { ...input }
                                onChange = { handleRadioClick }
                            />
                        ) )
                    }
                    {/*<WrapperFlexWithoutMarginAuto*/}
                    {/*    maxWidth = { 150 }*/}
                    {/*    marginRight = { 39 }*/}
                    {/*>*/}
                    {/*    <Label>*/}
                    {/*        <Radio*/}
                    {/*            value = "radio1"*/}
                    {/*            checked = { isRadioSelected("radio1") }*/}
                    {/*            onChange = { handleRadioClick }*/}
                    {/*        />*/}
                    {/*        <RadioSpan />*/}
                    {/*    </Label>*/}
                    {/*    <Text*/}
                    {/*        fontSize = { 14 }*/}
                    {/*        fontWeight = { 400 }*/}
                    {/*        lineHeight = { 19 }*/}
                    {/*        textAlign = "left"*/}
                    {/*        color = { COLOR.spaceCadetPrimary }*/}
                    {/*    >*/}
                    {/*        Next day delivery*/}
                    {/*    </Text>*/}
                    {/*</WrapperFlexWithoutMarginAuto>*/}
                    {/*<WrapperFlexWithoutMarginAuto*/}
                    {/*    maxWidth = { 150 }*/}
                    {/*    marginRight = { 39 }*/}
                    {/*>*/}
                    {/*    <Label>*/}
                    {/*        <Radio*/}
                    {/*            value = "radio2"*/}
                    {/*            checked = { isRadioSelected("radio2") }*/}
                    {/*            onChange = { handleRadioClick }*/}
                    {/*        />*/}
                    {/*        <RadioSpan />*/}
                    {/*    </Label>*/}
                    {/*    <Text*/}
                    {/*        fontSize = { 14 }*/}
                    {/*        fontWeight = { 400 }*/}
                    {/*        lineHeight = { 19 }*/}
                    {/*        textAlign = "left"*/}
                    {/*        color = { COLOR.spaceCadetPrimary }*/}
                    {/*    >*/}
                    {/*        Pick up in-store*/}
                    {/*    </Text>*/}
                    {/*</WrapperFlexWithoutMarginAuto>*/}
                </WrapperFlex>
            </GeneralWrapper>
        </>
    );
};