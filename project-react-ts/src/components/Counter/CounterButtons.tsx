import React, {useState} from "react";
import { WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { COLOR } from "../../styled-components/color-constants";
import { CommonButton } from "../common-components/Button";
import Text from "../../styled-components/components/Text";

interface ICounter {
    colorText?: string;
    backgroundColorText?: string;
    gridColumnStart?: number;
    gridColumnEnd?: number;
    gridRowStart?: number;
    gridRowEnd?: number;
}

export const CounterButtons = ( {
                                    colorText,
                                    backgroundColorText,
                                    gridColumnStart,
                                    gridColumnEnd,
                                    gridRowStart,
                                    gridRowEnd
                                }: ICounter) => {
    const [ count, setCount ] = useState( 0 );

    return (
        <WrapperFlexWithoutMarginAuto
            maxWidth = { 152 }
            borderTop = { COLOR.spaceCadetPrimary }
            borderBottom = { COLOR.spaceCadetPrimary }
            gridColumnStart = { gridColumnStart }
            gridColumnEnd = { gridColumnEnd }
            gridRowStart = { gridRowStart }
            gridRowEnd = { gridRowEnd }
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
                color = { colorText }
                backgroundColor = { backgroundColorText }
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
    );
};