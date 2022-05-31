import React from "react";
import { GeneralWrapper, WrapperFlex } from "../../styled-components/components/Wrapper";
import { COLOR } from "../../styled-components/color-constants";
import { Link } from "../../styled-components/components/Link";
import { LogoSvg } from "../../styled-components/components/Logo";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";

export const Footer = () => {
    return (
        <>
            <GeneralWrapper
                paddingTop = { 20 }
                paddingBottom = { 20 }
                backgroundColor = { COLOR.brightGraySecondary }
            >
                <WrapperFlex
                    maxWidth = { 1232 }
                    paddingRight = { 16 }
                    paddingLeft = { 16 }
                    justifyContent = "space-between"
                >
                    <Link
                        width = { 49 }
                        height = { 49 }
                    >
                        <LogoSvg />
                    </Link>

                    <SocialMedia />
                </WrapperFlex>
            </GeneralWrapper>
        </>
    )
};