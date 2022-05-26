import React, { useState } from "react";
import styled, { css } from "styled-components";
import { WrapperWithoutMarginAuto, WrapperFlexWithoutMargin } from "../../styled-components/components/Wrapper";
import { COLOR } from "../../styled-components/color-constants";

const Label = styled.label`
    color: ${ COLOR.spaceCadetPrimary };
`;

interface IInput {
    maxWidth?: number;
};

const Input = styled.input<IInput>`
  margin-bottom: 3px;
  padding: 5px;
  max-width: ${ p => p.maxWidth || 315 }px;
  width: 100%;
  height: 40px;
  border: 1px solid ${ COLOR.silverSandPrimary };
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: ${ COLOR.yankeesBluePrimary };
  &::placeholder {
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: ${ COLOR.silverSandPrimary };
  }
  &:hover {
    border: 1px solid ${ COLOR.manatee };
    &::placeholder {
      color: ${ COLOR.manatee };
    }
  }
  &:focus {
    border: 1px solid ${ COLOR.spaceCadetPrimary };
    &::placeholder {
      color: ${ COLOR.spanishGrayPrimary };
    }
  }
`;
const ErrorMessage = styled.p`
  margin-left: auto;
  max-width: 315px;
  width: 100%;
  color: ${ COLOR.razzmatazzPrimary };
`;

export const FormInput = ( props: any ) => {
    const { label, errorMessage, value, pattern, onChange, id, ...inputProps } = props;
    return (
        <>
            <WrapperWithoutMarginAuto
                marginBottom = { 16 }
                maxWidth = { 411 }
            >
                <WrapperFlexWithoutMargin
                    maxWidth = { 411 }
                    justifyContent = "space-between"
                >
                    <Label>
                        { label }
                    </Label>
                    <Input
                        { ...inputProps }
                        onChange = { onChange }
                        required
                    />
                </WrapperFlexWithoutMargin>
                <ErrorMessage>
                    { errorMessage }
                </ErrorMessage>
            </WrapperWithoutMarginAuto>
        </>
    );
;}