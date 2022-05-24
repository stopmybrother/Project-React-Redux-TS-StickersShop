import React from "react";
import styled from "styled-components";
import { WrapperFlexWithoutMarginAuto, WrapperFlex } from "../../styled-components/components/Wrapper";
import { CommonButtonMaxWidthMarginAuto } from "../common-components/Button";
import {COLOR} from "../../styled-components/color-constants";
import Text from "../../styled-components/components/Text";

export const CartTotals = () => {
    return (
        <>
            <WrapperFlexWithoutMarginAuto
                marginLeft = { 800 }
                maxWidth = { 296 }
                flexDirection = "column"
                rowGap = { 48 }
            >
                <WrapperFlex
                    maxWidth = { 296 }
                    flexDirection = "column"
                >
                    <Text
                        color = { COLOR.spaceCadetPrimary }
                        marginBottom = { 12 }
                    >
                        Cart Totals
                    </Text>
                    <WrapperFlex
                        paddingTop = { 12 }
                        paddingBottom = { 6 }
                        maxWidth = { 164 }
                        justifyContent = "space-between"
                    >
                        <Text
                            fontSize = { 18 }
                            fontWeight = { 400 }
                            lineHeight = { 25 }
                            textAlign = "left"
                            color = { COLOR.spaceCadetPrimary }
                        >
                            Subtotal
                        </Text>
                        <Text
                            fontSize = { 18 }
                            fontWeight = { 400 }
                            lineHeight = { 25 }
                            textAlign = "right"
                            color = { COLOR.spaceCadetPrimary }
                        >
                            $1.5
                        </Text>
                    </WrapperFlex>
                    <WrapperFlex
                        paddingTop = { 6 }
                        paddingBottom = { 12 }
                        maxWidth = { 164 }
                        justifyContent = "space-between"
                    >
                        <Text
                            fontSize = { 18 }
                            fontWeight = { 400 }
                            lineHeight = { 25 }
                            textAlign = "left"
                            color = { COLOR.spaceCadetPrimary }
                        >
                            Shipping
                        </Text>
                        <Text
                            fontSize = { 18 }
                            fontWeight = { 400 }
                            lineHeight = { 25 }
                            textAlign = "right"
                            color = { COLOR.spaceCadetPrimary }
                        >
                            free
                        </Text>
                    </WrapperFlex>
                    <WrapperFlex
                        paddingTop = { 12 }
                        maxWidth = { 164 }
                        justifyContent = "space-between"
                    >
                        <Text
                            fontWeight = { 700 }
                            textAlign = "left"
                            color = { COLOR.spaceCadetPrimary }
                        >
                            Total
                        </Text>
                        <Text
                            fontSize = { 20 }
                            fontWeight = { 700 }
                            lineHeight = { 27 }
                            textAlign = "right"
                            color = { COLOR.razzmatazzPrimary }
                        >
                            $1.5
                        </Text>
                    </WrapperFlex>
                </WrapperFlex>
                <CommonButtonMaxWidthMarginAuto
                    paddingTop = { 11 }
                    paddingRight = { 27 }
                    paddingBottom = { 11 }
                    paddingLeft = { 27 }
                    maxWidth = { 240 }
                    borderRadius = { 5 }
                    borderColor = { COLOR.metallicBlue }
                    backGroundColor = { COLOR.metallicBlue }
                    fontSize = { 18 }
                    lineHeight = { 25 }
                    color = { COLOR.whitePrimary }
                    hoverBorderColor = { COLOR.charcoalPrimary }
                    hoverBackgroundColor = { COLOR.charcoalPrimary }
                    hoverColor = { COLOR.whiteSecondary }
                    activeBorderColor = { COLOR.maastrichtBlueSecondary }
                    activeBackgroundColor = { COLOR.maastrichtBlueSecondary }
                    activeColor = { COLOR.whitePrimary }
                >
                    Proceed to checkout
                </CommonButtonMaxWidthMarginAuto>
            </WrapperFlexWithoutMarginAuto>
        </>
    );
};