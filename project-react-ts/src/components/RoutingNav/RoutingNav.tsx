import React from "react";
import { GeneralWrapper, Wrapper, WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { RouterNavLink } from "../common-components/RouterLink";

export const RoutingNav = () => {
    return (
        <>
            <GeneralWrapper
                paddingTop = { 36 }
                paddingBottom = { 36 }
            >
                <Wrapper
                    maxWidth = { 1232 }
                    paddingRight = { 16 }
                    paddingLeft = { 16 }
                >
                    <WrapperFlexWithoutMarginAuto
                        maxWidth = { 200 }
                        columnGap = { 22 }
                    >
                        <RouterNavLink
                            to = "/home"
                        >
                            Home
                        </RouterNavLink>
                        <RouterNavLink
                            to = "/shop"
                        >
                            Cart
                        </RouterNavLink>
                        <RouterNavLink
                            to = "#"
                        >
                            Checkout
                        </RouterNavLink>
                    </WrapperFlexWithoutMarginAuto>
                </Wrapper>
            </GeneralWrapper>
        </>
    );
};