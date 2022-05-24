import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import { GeneralWrapper, WrapperGridBasket, WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { Banner } from "../../containers/Banner/Banner";
import Text from "../../styled-components/components/Text";
import { StickerSmallWrapper } from "../../styled-components/components/Sticker";
import { Sticker } from "../../styled-components/components/Sticker";
import { CommonButtonMaxWidth } from "../../components/common-components/Button";
import { Cross } from "../../components/Cross/Cross";
import { CounterButtons } from "../../components/Counter/CounterButtons";


export const BasketPage = () => {
    return (
        <>
            <Banner
                paddingTop = { 104 }
                paddingBottom = { 104 }
                backgroundImage = { require("./../../images/Banners/BannerBasketPage.svg") }
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
                    Cart
                </ Text>
            </Banner>
            <GeneralWrapper
                paddingTop = { 50 }
                paddingBottom = { 50 }
            >
                <WrapperGridBasket
                    rows = { 2 }
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
                        Quantity
                    </Text>
                    <Text
                        fontSize = { 20 }
                        lineHeight = { 27 }
                        color = { COLOR.charcoalPrimary }
                        gridColumnStart = { 4 }
                        gridColumnEnd = { 5 }
                        gridRowStart = { 1 }
                        gridRowEnd = { 2 }
                    >
                        Total
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
                    <CounterButtons
                        colorText = { COLOR.charcoalPrimary }
                        backgroundColorText = { COLOR.whitePrimary }
                        gridColumnStart = { 3 }
                        gridColumnEnd = { 4 }
                        gridRowStart = { 2 }
                        gridRowEnd = { 3 }
                    />
                    <Text
                        fontSize = { 18 }
                        lineHeight = { 25 }
                        fontWeight = { 400 }
                        color = { COLOR.charcoalPrimary }
                        gridColumnStart = { 4 }
                        gridColumnEnd = { 5 }
                        gridRowStart = { 2 }
                        gridRowEnd = { 3 }
                    >
                        $1.2
                    </Text>
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
                </WrapperGridBasket>
                <CommonButtonMaxWidth
                    marginLeft = { 825 }
                    paddingTop = { 12 }
                    paddingRight = { 33 }
                    paddingBottom = { 12 }
                    paddingLeft = { 33 }
                    maxWidth = { 255 }
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
                    Continue shopping
                </CommonButtonMaxWidth>


            </GeneralWrapper>
        </>
    );
};