import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import { WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import Text from "../../styled-components/components/Text";

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

export const FormRadioInput = ( props: any ) => {
    const { name, label, checked, onChange, ...inputProps } = props
    const [ personalInfo, setPersonalInfo ] = useState( {
        delivery: "",
        pickUp: "",
    } );
    const [ selectedRadioInput, setSelectedRadioInput ] = useState( "" );

    const isRadioSelected = ( value: string ): boolean => selectedRadioInput === value;

    const handleRadioClick = ( e: React.ChangeEvent<HTMLInputElement> ): void => {
        setSelectedRadioInput( e.currentTarget.value );
    };
    return (
        <>
            <WrapperFlexWithoutMarginAuto
                maxWidth = { 150 }
                marginRight = { 39 }
            >
                <Label>
                    <Radio
                        value = { name }
                        checked = { checked }
                        onChange = { onChange }
                        { ...inputProps }
                    />
                    <RadioSpan />
                </Label>
                <Text
                    fontSize = { 14 }
                    fontWeight = { 400 }
                    lineHeight = { 19 }
                    textAlign = "left"
                    color = { COLOR.spaceCadetPrimary }
                >
                    { label }
                </Text>
            </WrapperFlexWithoutMarginAuto>
        </>
    );
};