import React, { useState } from "react";
import { COLOR } from "../../styled-components/color-constants";
import { WrapperWithoutMarginAuto, WrapperFlexWithoutMarginAuto, WrapperGrid } from "../../styled-components/components/Wrapper";
import { StickerDescription } from "../../styled-components/components/Wrapper";
import {
    StickerWrapper,
    HiddenWrapper,
    HiddenAddButton,
    Sticker,
    StickerName,
    Price,
} from "../../styled-components/components/Sticker";
import { IStickers, STICKERS } from "../../mock-data/stickers";

export const StickersList = () => {
    const [ isShown, setIsShown ] = useState( false );

    const OnMouseEnterHandler = ( e: React.MouseEvent<HTMLDivElement> ) => {
        e.preventDefault();
        setIsShown( true );
        // console.log(isShown)
    }
    const OnMouseLeaveHandler = ( e: React.MouseEvent<HTMLDivElement> ) => {
        e.preventDefault();
        setIsShown( false );
        // console.log(isShown)
    }
    return (
            <WrapperGrid
                marginBottom = { 48 }
                maxWidth = { 1024 }
                columns = { 3 }
                rows = { 3 }
                columnWidth = { 288 }
                rowWidth = { 336 }
                justifyContent = "space-between"
                rowGap = { 80 }
            >
                { STICKERS.map( ( sticker: IStickers, index: number, array ) => (
                    <WrapperWithoutMarginAuto
                        maxWidth = { 288 }
                    >
                        <StickerWrapper
                            onMouseEnter = { OnMouseEnterHandler }
                            onMouseLeave = { OnMouseLeaveHandler }
                        >
                            <Sticker
                                src ={ sticker.src }
                                alt = { sticker.name }
                                marginBottom = { 16 }
                                borderRadius = { 10 }
                            />
                            { sticker.hovered && (
                                <HiddenWrapper>
                                    <HiddenAddButton
                                        paddingTop = { 8 }
                                        paddingRight = { 27 }
                                        paddingBottom = { 8 }
                                        paddingLeft = { 27 }
                                        borderRadius = { 5 }
                                        borderColor = { COLOR.charcoalPrimary }
                                        backGroundColor = { COLOR.charcoalOpacityFifty }
                                        fontSize = { 20 }
                                        lineHeight = { 27 }
                                        color = { COLOR.whitePrimary }
                                        hoverBorderColor = { COLOR.charcoalPrimary }
                                        hoverBackgroundColor = { COLOR.charcoalOpacityEighty }
                                        hoverColor = { COLOR.whitePrimary }
                                        activeBorderColor = { COLOR.whitePrimary }
                                        activeBackgroundColor = { COLOR.charcoalPrimary }
                                        activeColor = { COLOR.whitePrimary }
                                    >
                                        Add to cart
                                    </HiddenAddButton>
                                </HiddenWrapper>
                            ) }
                        </StickerWrapper>

                        <StickerDescription
                            justifyContent = "space-between"
                            columnGap = { 57 }
                        >
                            <StickerName
                                fontSize = { 20 }
                                lineHeight = { 27 }
                            >
                                { sticker.name }
                            </StickerName>
                            <WrapperFlexWithoutMarginAuto
                                maxWidth = { 62 }
                                justifyContent = "center"
                            >
                                <Price
                                    color = { COLOR.razzmatazzPrimary }
                                >
                                    {sticker.currency}{sticker.price}
                                </Price>
                            </WrapperFlexWithoutMarginAuto>
                        </StickerDescription>
                    </WrapperWithoutMarginAuto>
                ) ) }
            </WrapperGrid>
    );
};