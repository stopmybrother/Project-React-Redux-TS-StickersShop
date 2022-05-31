import React, { useCallback, useMemo, useState } from "react";
import { GeneralWrapper, Wrapper } from "../../styled-components/components/Wrapper";
import { COLOR } from "../../styled-components/color-constants";
import { Sort } from "../Sort/Sort";
import { StickersList } from "../StickersList/StickersList";
import { CommonButtonMarginAuto } from "../../components/common-components/Button";
import { IStickers, STICKERS } from "../../constants/stickers";
import { useDispatch, useSelector } from "react-redux";
import { stickerSelector } from "../../redux/selectors/stickerSelectors/stickerSelector";
import { sortSelector } from "../../redux/selectors/sortSelectors/sortSelector";
import { filtersSelector } from "../../redux/selectors/filtersSelectors/filtersSelector";
import { addSticker, loveSticker } from "../../redux/actions/stickersActionCreactors/stickersActionCreator";
import { changeFilter } from "../../redux/actions/filtersActionCreators/filterActionCreator";
import { sortStickers } from "../../redux/actions/sortActionCreators/sortActionCreactor";

export const StickersMain = ( data: any, loading: boolean ) => {
    const newData = STICKERS.map( (sticker, index) => {
        sticker.src = data?.data?.books[index].image;
        return sticker;
    })

    const stickers = useSelector( stickerSelector );
    const filter = useSelector( filtersSelector );
    const sort = useSelector( sortSelector );

    const dispatch = useDispatch();

    const dispatchedAddSticker = useCallback(
        (sticker: IStickers) => dispatch(addSticker({
            id: sticker.id,
            src: sticker.src,
            name: sticker.name,
            category: sticker.category,
            price: sticker.price,
            currency: sticker.currency,
            stockStatus: sticker.stockStatus,
            isRelevant: sticker.isRelevant,
            isNew: sticker.isNew,
            loading: sticker.loading,
            hovered: sticker.hovered,
            loved: sticker.loved,
            added: sticker.added,
            inBasket: sticker.inBasket,
        })),
        [dispatch]
    );

    const dispatchedLoveSticker = useCallback(
        (id: number) => dispatch(loveSticker(id)),
        [dispatch]
    );

    const dispatchedFilterChange = useCallback(
        ( filter: string ) => dispatch( changeFilter( filter ) ),
        [ dispatch ],
    );

    const filterStickers = useCallback( ( stickers: IStickers[] ) => {
        switch ( filter ){
            case "relevance":
                return stickers.filter( ( sticker: IStickers ) => !sticker.isRelevant );
            case "new":
                return stickers.filter( ( sticker: IStickers ) => !sticker.isNew);
            case "alphabet":
                return stickers.sort( ( firstValue: IStickers, secondValue: IStickers ) => {
                    if ( firstValue.name < secondValue.name ) {
                        return -1;
                    }
                    if ( firstValue.name > secondValue.name ) {
                        return 1;
                    }
                    return 0;
                } );
            case "reverseAlphabet":
                return stickers.sort( ( firstValue: IStickers, secondValue: IStickers ) => {
                    if ( secondValue.name < firstValue.name ) {
                        return -1;
                    }
                    if ( secondValue.name > firstValue.name ) {
                        return 1;
                    }
                    return 0;
                } );
            case "highestPrice":
                return stickers.sort( ( firstValue: IStickers, secondValue: IStickers ) => {
                    return ( firstValue.price - secondValue.price );
                } );
            case "lowestPrice":
                return stickers.sort( ( firstValue: IStickers, secondValue: IStickers ) => {
                    return ( secondValue.price - firstValue.price );
                } );
            default:
                return stickers;
        }
    }, [ filter, stickers ] );

    const filteredStickers = useMemo( () => filterStickers( stickers ), [ stickers, filterStickers ] );

    const dispatchedSortChange = useCallback(
        ( tag: string ) => dispatch( sortStickers( tag ) ),
        [ dispatch ],
    );

    const sortStickersByTag = useCallback( ( stickers: IStickers[] ) => {
        switch ( sort ) {
            case "all":
                return stickers.filter( ( sticker: IStickers ) => sticker.category );
            case "drink":
                return stickers.filter( ( sticker: IStickers ) => sticker.category === "drink" );
            case "eat":
                return stickers.filter( ( sticker: IStickers ) => sticker.category === "eat" );
            case "sign":
                return stickers.filter( ( sticker: IStickers ) => sticker.category === "sign" );
            case "flower":
                return stickers.filter( ( sticker: IStickers ) => sticker.category === "flower" );
            case "animal":
                return stickers.filter( ( sticker: IStickers ) => sticker.category === "animal" );
            case "other":
                return stickers.filter( ( sticker: IStickers ) => sticker.category === "other" );
            default:
                return stickers;
        };
    }, [ sort, stickers ] );

    const sortedStickers = useMemo( () => sortStickersByTag( stickers ), [ stickers, sortStickersByTag ] );

    return (
        <GeneralWrapper
            paddingTop = { 140 }
            paddingBottom = { 80 }
            backgroundColor = { COLOR.whitePrimary }
        >
            <Wrapper
                maxWidth = { 1232 }
                paddingRight = { 16 }
                paddingLeft = { 16 }
            >
                <Sort
                    amount = { stickers.length }
                    activeFilter = { filter }
                    activeTag = { sort }
                    filterChange = { dispatchedFilterChange }
                    sortSticker = { dispatchedSortChange }
                />
                <StickersList
                    loveSticker = {dispatchedLoveSticker}
                />
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
            </Wrapper>
        </GeneralWrapper>
    );
};