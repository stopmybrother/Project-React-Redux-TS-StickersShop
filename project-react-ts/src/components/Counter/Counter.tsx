import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import { WrapperWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import Text from "../../styled-components/components/Text";
import { CounterButtons } from "./CounterButtons";

interface ICounterWrapper {
    colorText?: string;
    backgroundColorText?: string;
}

export const Counter = ( {
                            colorText,
                            backgroundColorText
                         }: ICounterWrapper ) => {
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
                <CounterButtons
                    colorText = { colorText }
                    backgroundColorText = { backgroundColorText }
                />
            </WrapperWithoutMarginAuto>
        </>
    )
};