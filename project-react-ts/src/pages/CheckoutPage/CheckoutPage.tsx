import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import { GeneralWrapper } from "../../styled-components/components/Wrapper";
import { Banner } from "../../containers/Banner/Banner";
import Text from "../../styled-components/components/Text";
import { Checkout } from "../../components/Form/Form";

export const CheckoutPage = () => {
    return (
        <>
            <Banner
                paddingTop = { 104 }
                paddingBottom = { 104 }
                backgroundImage = { require("./../../images/Banners/BannerCheckoutPage.svg") }
            >
                <Text
                    fontSize = { 36 }
                    lineHeight = { 49 }
                    color = { COLOR.charcoalPrimary }
                    gridColumnStart = { 1 }
                    gridColumnEnd = { 2 }
                    gridRowStart = { 1 }
                    gridRowEnd = { 2 }
                >
                    Checkout
                </ Text>
            </Banner>
            <GeneralWrapper
                paddingTop = { 34 }
                paddingBottom = { 34 }
            >
                <Checkout />
            </GeneralWrapper>
        </>
    );
};