import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import { TextInForm } from "../../styled-components/components/Text";
import { CommonButtonMaxWidthMarginAuto } from "../common-components/Button";
import { PersonalInfo } from "./PersonalInfoForm";
import { ShippingInfo } from "./ShippingInfoForm";
import { AddressInfo } from "./AddressInfoForm";
import { PaymentInfo } from "./PaymentInfoForm";


interface IForm {
    maxWidth?: number;
}

const Form = styled.form<IForm>`
  margin-left: 150px;
  max-width: ${ p => p.maxWidth || 411 }px;
`;
export const Checkout = () => {
    const HandleSubmit = ( e: React.FormEvent ) => {
        e.preventDefault();
    };

    return (
        <>
            <Form
                onSubmit = { HandleSubmit }
            >
                <PersonalInfo />
                <ShippingInfo />
                <AddressInfo />
                <PaymentInfo />

                <CommonButtonMaxWidthMarginAuto
                    type = "submit"
                    paddingTop = { 11 }
                    paddingRight = { 159 }
                    paddingBottom = { 11 }
                    paddingLeft = { 159 }
                    maxWidth = { 411 }
                    borderRadius = { 5 }
                    borderColor = { COLOR.metallicBlue }
                    backGroundColor = { COLOR.metallicBlue }
                    fontSize = { 20 }
                    lineHeight = { 27 }
                    color = { COLOR.whitePrimary }
                    hoverBorderColor = { COLOR.charcoalPrimary }
                    hoverBackgroundColor = { COLOR.charcoalPrimary }
                    hoverColor = { COLOR.whiteSecondary }
                    activeBorderColor = { COLOR.maastrichtBlueSecondary }
                    activeBackgroundColor = { COLOR.maastrichtBlueSecondary }
                    activeColor = { COLOR.whitePrimary }
                >
                    Complete
                </CommonButtonMaxWidthMarginAuto>
            </Form>
        </>
    );
};