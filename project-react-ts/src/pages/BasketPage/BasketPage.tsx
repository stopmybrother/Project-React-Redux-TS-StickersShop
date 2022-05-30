import React, { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stickerSelector } from "../../redux/selectors/stickerSelectors/stickerSelector";
import { removeSticker } from "../../redux/actions/stickersActionCreactors/stickersActionCreator";
import { COLOR } from "../../styled-components/color-constants";
import {
    GeneralWrapper,
    WrapperGridBasket,
    WrapperFlexWithoutMarginAuto,
    Wrapper
} from "../../styled-components/components/Wrapper";
import { Banner } from "../../containers/Banner/Banner";
import Text from "../../styled-components/components/Text";
import { StickerSmallWrapper } from "../../styled-components/components/Sticker";
import { Sticker } from "../../styled-components/components/Sticker";
import { CommonButtonMaxWidth } from "../../components/common-components/Button";
import { Cross } from "../../components/Cross/Cross";
import { CounterButtons } from "../../components/Counter/CounterButtons";
import { CartTotals } from "../../components/CartTotals/CartTotals";
import { RouterLink } from "../../components/common-components/RouterLink";
import { IStickers, STICKERS } from "../../constants/stickers";
import { filtersSelector } from "../../redux/selectors/filtersSelectors/filtersSelector";
import { changeFilter } from "../../redux/actions/filtersActionCreators/filterActionCreator";

export const BasketPage = () => {
    let stickersInBasket = STICKERS.filter((sticker: IStickers) => sticker.inBasket);

    const basketStickers = useSelector( stickerSelector );
    const filter = useSelector(filtersSelector);

    const dispatch = useDispatch();

    const dispatchedFilterChange = useCallback(
        (filter: string) => dispatch(changeFilter(filter)),
        [dispatch]
    );
    const dispatchedRemoveSticker = useCallback(
        (id: number) => dispatch(removeSticker(id)),
        [dispatch]
    );

    const isStickerExist = useMemo(() => basketStickers && basketStickers.length > 0, [basketStickers]);

    const filterStickers = useCallback((stickers: IStickers[]) => {
        switch (filter) {
            case 'inBasket':
                return stickers.filter(sticker => sticker.inBasket);
            default:
                return stickers;
        }
    }, [filter, basketStickers]);

    const filteredStickers = useMemo(() => filterStickers(basketStickers), [basketStickers, filterStickers]);

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
                    </WrapperGridBasket>

                { stickersInBasket.map((sticker: IStickers, index: number, array: IStickers[]) => (
                    <WrapperGridBasket
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
                                        alt = { sticker.name }
                                        maxWidth = { 64 }
                                        maxHeight = { 64 }
                                        borderRadius = { 10 }
                                    />
                                </StickerSmallWrapper>
                                <Text
                                    fontSize = { 20 }
                                    lineHeight = { 27 }
                                    fontWeight = { 400 }
                                    textAlign = "left"
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
                            <CounterButtons
                                colorText = { COLOR.charcoalPrimary }
                                backgroundColorText = { COLOR.whitePrimary }
                                gridColumnStart = { 3 }
                                gridColumnEnd = { 4 }
                                gridRowStart = { 1 }
                                gridRowEnd = { 2 }
                            />
                            <Text
                                fontSize = { 18 }
                                lineHeight = { 25 }
                                fontWeight = { 400 }
                                color = { COLOR.charcoalPrimary }
                                gridColumnStart = { 4 }
                                gridColumnEnd = { 5 }
                                gridRowStart = { 1 }
                                gridRowEnd = { 2 }
                            >
                                { sticker.price  }{ sticker.currency }
                            </Text>
                            <Cross
                                id = { sticker.id }
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
                                removeSticker = { dispatchedRemoveSticker}
                            />
                    </WrapperGridBasket>
                    ))}
                <Wrapper
                    maxWidth = { 1232 }
                    paddingRight = { 16 }
                    paddingLeft = { 16 }
                >
                    <CommonButtonMaxWidth
                        marginTop = { 48 }
                        marginBottom = { 64 }
                        marginLeft = { 800 }
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
                        <RouterLink
                            to = "/home"
                            color = { COLOR.spaceCadetPrimary }
                            hoverColor = { COLOR.whiteSecondary }
                            activeColor = { COLOR.whiteSecondary }
                        >
                            Continue shopping
                        </RouterLink>
                    </CommonButtonMaxWidth>
                </Wrapper>
                <Wrapper
                    maxWidth = { 1232 }
                    paddingRight = { 16 }
                    paddingLeft = { 16 }
                >
                    { isStickerExist &&
                        <CartTotals
                            stickerList = { stickersInBasket }
                        />
                    }
                </Wrapper>
            </GeneralWrapper>
        </>
    );
};