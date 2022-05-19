import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import { GeneralWrapper, Wrapper } from "../../styled-components/components/Wrapper";
import { BigButton } from "../../components/common-components/Button";

export const Banner = () => {
    return (
        <GeneralWrapper
            paddingTop = { 142 }
            paddingBottom = { 142 }
            // backgroundImage = { require("./../../images/Banners/BannerFirstPage.svg") }
        >
            <Wrapper
                maxWidth = { 1232 }
                paddingRight = { 16 }
                paddingLeft = { 16 }
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
            </Wrapper>
        </GeneralWrapper>
    );
};
