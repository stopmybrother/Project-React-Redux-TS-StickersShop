import React, { useState } from "react";
import { RouterLink } from "../../components/common-components/RouterLink";
import { COLOR } from "../../styled-components/color-constants";
import { WrapperWithoutMarginAuto, WrapperFlexWithoutMarginAuto, WrapperGrid } from "../../styled-components/components/Wrapper";
import { StickerDescription } from "../../styled-components/components/Wrapper";
import Text from "../../styled-components/components/Text";
import { CommonButtonMarginAuto } from "../../components/common-components/Button";
import {
    StickerWrapper,
    HiddenWrapper,
    Sticker,
} from "../../styled-components/components/Sticker";
import { IStickers, STICKERS } from "../../constants/stickers";
import { Heart } from "../../styled-components/components/Sticker";

interface IStickerList {
    loveSticker: (id: number) => void;
}

export const StickersList = ( { loveSticker }: IStickerList ) => {
    const [ isShown, setIsShown ] = useState( false );

    const OnMouseEnterHandler = ( id: number ) => {
        setIsShown( true );
        STICKERS.map((sticker) => {
            if (sticker.id === id) {
                sticker.added = true;
                sticker.hovered = true;
            }
            return sticker;
        })
    };
    const OnMouseLeaveHandler = ( e: React.MouseEvent<HTMLDivElement> ) => {
        e.preventDefault();
        setIsShown( false );
        STICKERS.map((sticker) => {
            sticker.added = false
            sticker.hovered = false
        })
    };
    const HandleClick = ( id: number ) => {
        STICKERS.map( ( sticker: IStickers ) => {
                if (sticker.id === id) {
                    sticker.added = true;
                }
                return sticker;
            } )
    };
    const HandleLoveClick = ( id: number ) => {
        STICKERS.map((sticker: IStickers) => {
            if (sticker.id === id ) {
                sticker.loved = !sticker.loved;
            }
            console.log(sticker)
            return sticker;
        })
    };
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
                            key = { index }
                            onMouseEnter = { () => OnMouseEnterHandler( sticker.id ) }
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
                                    <CommonButtonMarginAuto
                                        paddingTop = { 8 }
                                        paddingRight = { 27 }
                                        paddingBottom = { 8 }
                                        paddingLeft = { 27 }
                                        borderRadius = { 5 }
                                        borderColor = { COLOR.charcoalPrimary }
                                        backGroundColor = { COLOR.charcoalOpacityFifty }
                                        fontSize = { 20 }
                                        lineHeight = { 27 }
                                        hoverBorderColor = { COLOR.charcoalPrimary }
                                        hoverBackgroundColor = { COLOR.charcoalOpacityEighty }
                                        activeBorderColor = { COLOR.whitePrimary }
                                        activeBackgroundColor = { COLOR.charcoalPrimary }
                                        onClick = { () => HandleClick( sticker.id ) }
                                    >
                                        <RouterLink
                                            key = { sticker.id }
                                            to = { `/shop/${ sticker.name }` }
                                            color = { COLOR.whitePrimary }
                                            hoverColor = { COLOR.whitePrimary }
                                            activeColor = { COLOR.whitePrimary }
                                            // onClick = { () => HandleClick( sticker.id ) }
                                        >
                                            Add to cart
                                        </RouterLink>
                                    </CommonButtonMarginAuto>
                                    <Heart
                                        onClick = { () => {
                                            HandleLoveClick(sticker.id)
                                            loveSticker(sticker.id)
                                        } }
                                    />
                                </HiddenWrapper>
                            ) }
                        </StickerWrapper>

                        <StickerDescription
                            justifyContent = "space-between"
                            columnGap = { 57 }
                        >
                            <Text
                                fontSize = { 20 }
                                lineHeight = { 27 }
                            >
                                { sticker.name }
                            </Text>
                            <WrapperFlexWithoutMarginAuto
                                maxWidth = { 62 }
                                justifyContent = "center"
                            >
                                <Text
                                    color = { COLOR.razzmatazzPrimary }
                                >
                                    {sticker.currency}{sticker.price}
                                </Text>
                            </WrapperFlexWithoutMarginAuto>
                        </StickerDescription>
                    </WrapperWithoutMarginAuto>
                ) ) }
            </WrapperGrid>
    );
};