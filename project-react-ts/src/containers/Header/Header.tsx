import React from "react";
import { HeaderWrapper, WrapperFlex } from "../../styled-components/components/Wrapper";
import { Link } from "../../styled-components/components/Link";
import { LogoSvg } from "../../styled-components/components/Logo";
import { NavMenu } from "../../components/Nav/Nav";
import { COLOR } from "../../styled-components/color-constants";

export const Header = () => {
    return (
        <>
            <HeaderWrapper
                paddingTop = { 20 }
                paddingBottom = { 20 }
                backgroundColor = { COLOR.silverSandPrimary }
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

                    <NavMenu />
                </WrapperFlex>
            </HeaderWrapper>
        </>
    )
};