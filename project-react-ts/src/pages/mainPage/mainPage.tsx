import React from "react";
import { Banner } from "../../containers/Banner/Banner";
import { StickersMain } from "../../containers/StickersMain/StickersMain";
import { BigButton } from "../../components/common-components/Button";
import { COLOR } from "../../styled-components/color-constants";

export const MainPage = () => {
    return (
        <>
            <Banner
                paddingTop = { 142 }
                paddingBottom = { 142 }
                backgroundImage = { require("./../../images/Banners/BannerFirstPage.svg") }
            >
                <BigButton
                    paddingTop = { 8 }
                    paddingRight = { 123 }
                    paddingBottom = { 8 }
                    paddingLeft = { 123 }
                    maxWidth = { 443 }
                    borderRadius = { 5 }
                    backGroundColor = { "transparent" }
                    fontSize = { 36 }
                    lineHeight = { 49 }
                    color = { COLOR.metallicBlue }
                    textShadow = { COLOR.blackOpacityTwentyFive }
                >
                    Create your own stickers
                </ BigButton>
            </Banner>
            <StickersMain />
        </>
    );
};