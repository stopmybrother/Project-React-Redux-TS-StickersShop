import React from "react";
import { Banner } from "../../containers/Banner/Banner";
import { COLOR } from "../../styled-components/color-constants";
import Text from "../../styled-components/components/Text";
import { AddCart } from "../../containers/AddCart/AddCart";
import { RelatedProducts } from "../../containers/RelatedProducts/RelatedProducts";

export const ShopPage = () => {
    return (
        <>
            <Banner
                paddingTop = { 110 }
                paddingBottom = { 110 }
                backgroundImage = { require("./../../images/Banners/BannerShopPage.svg") }
            >
                <Text
                    fontSize = { 36 }
                    lineHeight = { 49 }
                    color = { COLOR.spaceCadetPrimary }
                >
                    Shop
                </ Text>
            </Banner>
            <AddCart />
            <RelatedProducts />
        </>
    );
};