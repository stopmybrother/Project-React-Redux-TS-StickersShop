import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import { WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { CommonButton } from "../common-components/Button";
import { TAGS, ITags } from "../../mock-data/stickers";

export const SortTags = () => {
    return (
        <WrapperFlexWithoutMarginAuto
            maxWidth = { 635 }
            justifyContent = "space-between"
            columnGap = { 24 }
            gridColumnStart = { 1 }
            gridColumnEnd = { 4 }
            gridRowStart = { 2 }
            gridRowEnd = { 3 }
        >
            { TAGS.map( ( tag: ITags ) => (
                <CommonButton
                    paddingTop = { 11 }
                    paddingRight = { 19 }
                    paddingBottom = { 11 }
                    paddingLeft = { 19 }
                    borderColor = { COLOR.manatee }
                    borderRadius = { 5 }
                    backGroundColor = { COLOR.whiteSecondary }
                    fontSize = { 14 }
                    lineHeight = { 19 }
                    fontWeight = { 400 }
                    color = { COLOR.manatee }
                    hoverBackgroundColor = { COLOR.spaceCadetPrimary }
                    hoverColor = { COLOR.whiteSecondary }
                    hoverBorderColor = { COLOR.spaceCadetPrimary }
                    activeBackgroundColor = { COLOR.metallicBlue }
                    activeColor = { COLOR.whiteSecondary }
                    activeBorderColor = { COLOR.spaceCadetPrimary }
                >
                    { tag }
                </CommonButton>
            ) ) }
        </WrapperFlexWithoutMarginAuto>
    );
};