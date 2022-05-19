import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import { WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { CommonButton } from "../common-components/Button";

export const SortTags = () => {
    const tags = [
        "all",
        "drink",
        "eat",
        "sign",
        "flower",
        "animal",
        "coffee"
    ]
    return (
        <WrapperFlexWithoutMarginAuto
            maxWidth = { 635 }
            justifyContent = "space-between"
            columnGap = { 24 }
        >
            { tags.map( tag => (
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