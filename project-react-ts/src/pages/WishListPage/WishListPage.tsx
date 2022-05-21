import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import { GeneralWrapper, WrapperGridWishList, WrapperFlexWithoutMarginAuto, WrapperWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { IStickers, STICKERS } from "../../mock-data/stickers";
import { Banner } from "../../containers/Banner/Banner";
import Text from "../../styled-components/components/Text";
import { StickerSmallWrapper } from "../../styled-components/components/Sticker";
import { Sticker } from "../../styled-components/components/Sticker";
import {CommonButton, CommonButtonMarginAuto} from "../../components/common-components/Button";
import { IconFontAwesome } from "../../styled-components/components/Select";
import { Cross } from "../../components/Cross/Cross";


export const WishListPage = () => {
    return (
        <>
            <Banner
                paddingTop = { 104 }
                paddingBottom = { 104 }
                backgroundImage = { require("./../../images/Banners/BannerWishListPage.svg") }
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
                    WishList
                </ Text>
            </Banner>
            <GeneralWrapper
                paddingTop = { 50 }
                paddingBottom = { 50 }
            >
                <WrapperGridWishList
                    rows = { 3 }
                    rowWidth = { 64 }
                    justifyContent="center"
                >
                    <Text
                        fontSize = { 20 }
                        lineHeight = { 27 }
                        color = { COLOR.charcoalPrimary }
                        gridColumnStart = { 1 }
                        gridColumnEnd = { 2 }
                        gridRowStart = { 1 }
                        gridRowEnd = { 2 }
                    >
                        Product
                    </Text>
                    <Text
                        fontSize = { 20 }
                        lineHeight = { 27 }
                        color = { COLOR.charcoalPrimary }
                        gridColumnStart = { 2 }
                        gridColumnEnd = { 3 }
                        gridRowStart = { 1 }
                        gridRowEnd = { 2 }
                    >
                        Price
                    </Text>
                    <Text
                        fontSize = { 20 }
                        lineHeight = { 27 }
                        color = { COLOR.charcoalPrimary }
                        gridColumnStart = { 3 }
                        gridColumnEnd = { 4 }
                        gridRowStart = { 1 }
                        gridRowEnd = { 2 }
                    >
                        Stock status
                    </Text>
                    <WrapperFlexWithoutMarginAuto
                        marginLeft = { 205 }
                        maxWidth = { 160 }
                        columnGap = { 20 }
                        gridColumnStart = { 1 }
                        gridColumnEnd = { 2 }
                        gridRowStart = { 2 }
                        gridRowEnd = { 3 }
                    >
                        <StickerSmallWrapper>
                            <Sticker
                                src = { "/images/Stickers/GirlSticker.svg" }
                                alt = "Girl"
                                maxWidth = { 64 }
                                maxHeight = { 64 }
                                // marginBottom = { 16 }
                                borderRadius = { 10 }
                            />
                        </StickerSmallWrapper>
                        <Text
                            fontSize = { 20 }
                            lineHeight = { 27 }
                            fontWeight = { 400 }
                            color = { COLOR.charcoalPrimary }
                        >
                            Girl
                        </Text>
                    </WrapperFlexWithoutMarginAuto>
                    <Text
                        fontSize = { 18 }
                        lineHeight = { 25 }
                        fontWeight = { 400 }
                        color = { COLOR.charcoalPrimary }
                        gridColumnStart = { 2 }
                        gridColumnEnd = { 3 }
                        gridRowStart = { 2 }
                        gridRowEnd = { 3 }
                    >
                        $1.2
                    </Text>
                    <Text
                        fontSize = { 18 }
                        lineHeight = { 25 }
                        fontWeight = { 400 }
                        color = { COLOR.charcoalPrimary }
                        gridColumnStart = { 3 }
                        gridColumnEnd = { 4 }
                        gridRowStart = { 2 }
                        gridRowEnd = { 3 }
                    >
                        in Stock
                    </Text>
                    <CommonButton
                        paddingTop = { 7 }
                        paddingRight = { 25 }
                        paddingBottom = { 7 }
                        paddingLeft = { 25 }
                        borderRadius = { 5 }
                        borderColor = { COLOR.metallicBlue }
                        backGroundColor = { COLOR.whitePrimary }
                        fontSize = { 20 }
                        lineHeight = { 27 }
                        color = { COLOR.spaceCadetPrimary }
                        hoverBorderColor = { COLOR.spaceCadetPrimary }
                        hoverBackgroundColor = { COLOR.spaceCadetPrimary }
                        hoverColor = { COLOR.whiteSecondary }
                        activeBorderColor = { COLOR.maastrichtBlueSecondary }
                        activeBackgroundColor = { COLOR.metallicBlue }
                        activeColor = { COLOR.whitePrimary }
                        gridColumnStart = { 4 }
                        gridColumnEnd = { 5 }
                        gridRowStart = { 2 }
                        gridRowEnd = { 3 }
                    >
                        Add to cart
                    </CommonButton>
                    <Cross
                        marginLeft = { 30 }
                        width = { 40 }
                        height = { 40 }
                        widthSpan = { 24 }
                        heightSpan = { 2 }
                        backgroundColorSpan = { COLOR.ashGray }
                        hoverBackgroundColorSpan = { COLOR.charcoalPrimary }
                        activeBackgroundColorSpan = { COLOR.razzmatazzPrimary }
                        gridColumnStart = { 5 }
                        gridColumnEnd = { 6 }
                        gridRowStart = { 2 }
                        gridRowEnd = { 3 }
                    />
                </WrapperGridWishList>
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
            </GeneralWrapper>
        </>
    );
};