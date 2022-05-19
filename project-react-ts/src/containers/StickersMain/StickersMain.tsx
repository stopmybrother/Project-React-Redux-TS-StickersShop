import React from "react";
import { GeneralWrapper, Wrapper } from "../../styled-components/components/Wrapper";
import {COLOR} from "../../styled-components/color-constants";
import { Sort } from "../Sort/Sort";
import { StickersList } from "../StickersList/StickersList";
import { CommonButtonMarginAuto } from "../../components/common-components/Button";

export const StickersMain = () => {
    return (
        <GeneralWrapper
            paddingTop = { 140 }
            paddingBottom = { 80 }
            backgroundColor = { COLOR.whitePrimary }
        >
            <Wrapper
                paddingRight = { 16 }
                paddingLeft = { 16 }
                maxWidth = { 1232 }
            >
                <Sort />
                <StickersList />
                <CommonButtonMarginAuto
                    paddingTop = { 12 }
                    paddingRight = { 33 }
                    paddingBottom = { 12 }
                    paddingLeft = { 33 }
                    borderColor = { COLOR.metallicBlue }
                    borderRadius = { 5 }
                    backGroundColor = "transparent"
                    fontSize = { 20 }
                    lineHeight = { 27 }
                    color = { COLOR.spaceCadetPrimary }
                    hoverBackgroundColor = { COLOR.spaceCadetPrimary }
                    hoverColor = { COLOR.whiteSecondary }
                    hoverBorderColor = { COLOR.spaceCadetPrimary }
                    activeBackgroundColor = { COLOR.metallicBlue }
                    activeColor = { COLOR.whiteSecondary }
                    activeBorderColor = { COLOR.maastrichtBlueSecondary }
                >
                    All stickers
                </CommonButtonMarginAuto>

            </Wrapper>
        </GeneralWrapper>
    );
};