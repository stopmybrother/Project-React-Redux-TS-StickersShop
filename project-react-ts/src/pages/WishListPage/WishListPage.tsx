import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import { GeneralWrapper, WrapperGridWishList, WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { Banner } from "../../containers/Banner/Banner";
import Text from "../../styled-components/components/Text";
import { StickerSmallWrapper } from "../../styled-components/components/Sticker";
import { Sticker } from "../../styled-components/components/Sticker";
import { CommonButton, CommonButtonWishListMarginAuto } from "../../components/common-components/Button";
import { Cross } from "../../components/Cross/Cross";
import {IStickers, STICKERS} from "../../constants/stickers";


export const WishListPage = () => {
    let stickersLoved = STICKERS.filter((sticker: IStickers) => sticker.loved)
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
                minHeight = { 70 }
            >
                <WrapperGridWishList
                    rows = { 1 }
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
                </WrapperGridWishList>
                { stickersLoved.map((sticker: IStickers) => (
                    <WrapperGridWishList
                        rows = { 1 }
                        rowWidth = { 64 }
                        justifyContent="center"
                    >
                        <WrapperFlexWithoutMarginAuto
                            marginLeft = { 205 }
                            maxWidth = { 160 }
                            columnGap = { 20 }
                            gridColumnStart = { 1 }
                            gridColumnEnd = { 2 }
                            gridRowStart = { 1 }
                            gridRowEnd = { 2 }
                        >
                            <StickerSmallWrapper>
                                <Sticker
                                    src = { sticker.src }
                                    alt = "Girl"
                                    maxWidth = { 64 }
                                    maxHeight = { 64 }
                                    borderRadius = { 10 }
                                />
                            </StickerSmallWrapper>
                            <Text
                                fontSize = { 20 }
                                lineHeight = { 27 }
                                fontWeight = { 400 }
                                color = { COLOR.charcoalPrimary }
                            >
                                { sticker.name }
                            </Text>
                        </WrapperFlexWithoutMarginAuto>
                        <Text
                            fontSize = { 18 }
                            lineHeight = { 25 }
                            fontWeight = { 400 }
                            color = { COLOR.charcoalPrimary }
                            gridColumnStart = { 2 }
                            gridColumnEnd = { 3 }
                            gridRowStart = { 1 }
                            gridRowEnd = { 2 }
                        >
                            { sticker.price }{ sticker.currency }
                        </Text>
                        <Text
                            fontSize = { 18 }
                            lineHeight = { 25 }
                            fontWeight = { 400 }
                            color = { COLOR.charcoalPrimary }
                            gridColumnStart = { 3 }
                            gridColumnEnd = { 4 }
                            gridRowStart = { 1 }
                            gridRowEnd = { 2 }
                        >
                            { sticker.stockStatus }
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
                            gridRowStart = { 1 }
                            gridRowEnd = { 2 }
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
                            gridRowStart = { 1 }
                            gridRowEnd = { 2 }
                        />
                    </WrapperGridWishList>
                    )) }
                <CommonButtonWishListMarginAuto
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
                </CommonButtonWishListMarginAuto>
            </GeneralWrapper>
        </>
    );
};