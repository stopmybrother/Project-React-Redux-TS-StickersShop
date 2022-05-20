import React, { useState } from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import { WrapperFlexWithoutMarginAuto, WrapperWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import Text from "../../styled-components/components/Text";
import { CommonButton } from "../common-components/Button";

export const Counter = () => {
    const [ count, setCount ] = useState( 0 )
    return (
        <>
            <WrapperWithoutMarginAuto
                maxWidth = { 211 }
            >
                <Text
                    marginBottom = { 16 }
                    fontSize = { 18 }
                    lineHeight = { 25 }
                    fontWeight = { 400 }
                    color = { COLOR.spaceCadetPrimary }
                    textAlign = "left"
                >
                    Quantity
                </Text>
                <WrapperFlexWithoutMarginAuto
                    maxWidth = { 152 }
                    borderTop = { COLOR.spaceCadetPrimary }
                    borderBottom = { COLOR.spaceCadetPrimary }
                >
                    <CommonButton
                        paddingTop = { 10 }
                        paddingRight = { 20 }
                        paddingBottom = { 10 }
                        paddingLeft = { 20 }
                        fontSize = { 20 }
                        lineHeight = { 27 }
                        borderColor = "transparent"
                        backgroundColor = "transparent"
                        color = { COLOR.charcoalPrimary }
                        hoverBorderColor = "transparent"
                        hoverBackgroundColor = "transparent"
                        hoverColor = { COLOR.razzmatazzPrimary }
                        activeBorderColor = "transparent"
                        activeBackgroundColor = "transparent"
                        activeColor = { COLOR.brownChocolate }
                        onClick = { () => setCount( count - 1 ) }
                        disabled = { count === 0 }
                    >
                        -
                    </CommonButton>
                        <Text
                            paddingTop = { 11 }
                            paddingBottom = { 11 }
                            minWidth = { 50 }
                            fontSize = { 20 }
                            lineHeight = { 27 }
                            color = { COLOR.whiteSecondary }
                            backgroundColor = { COLOR.metallicBlue }
                        >
                            { count }
                        </Text>
                    <CommonButton
                        paddingTop = { 10 }
                        paddingRight = { 20 }
                        paddingBottom = { 10 }
                        paddingLeft = { 20 }
                        fontSize = { 20 }
                        lineHeight = { 27 }
                        borderColor = "transparent"
                        backgroundColor = "transparent"
                        color = { COLOR.charcoalPrimary }
                        hoverBorderColor = "transparent"
                        hoverBackgroundColor = "transparent"
                        hoverColor = { COLOR.razzmatazzPrimary }
                        activeBorderColor = "transparent"
                        activeBackgroundColor = "transparent"
                        activeColor = { COLOR.brownChocolate }
                        onClick = { () => setCount( count + 1 ) }
                    >
                        +
                    </CommonButton>
                </WrapperFlexWithoutMarginAuto>
            </WrapperWithoutMarginAuto>
        </>
    )
};