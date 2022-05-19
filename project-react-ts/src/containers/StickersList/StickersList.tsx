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
interface IStickers {
    id: number;
    src: string;
    name: string;
    price: number;
    currency: string;
    hovered?: boolean;
    loved: boolean;
    added: boolean;
};

export const StickersList = () => {
    const [ isShown, setIsShown ] = useState( false );
    const stickers: IStickers[] = [
        {
            id: 1,
            src: "/images/Stickers/CoffeeSticker.svg",
            name: "Coffee",
            price: 1.50,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        },
        {
            id: 2,
            src: "images/Stickers/FootSticker.svg",
            name: "Foot",
            price: 2.50,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        },
        {
            id: 3,
            src: "images/Stickers/GirlSticker.svg",
            name: "Girl",
            price: 1.20,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        },
        {
            id: 4,
            src: "images/Stickers/FlowersSticker.svg",
            name: "Flower",
            price: 2.30,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        },
        {
            id: 5,
            src: "images/Stickers/MacaroniSticker.svg",
            name: "Macaroni",
            price: 1.20,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        },
        {
            id: 6,
            src: "images/Stickers/SignSticker.svg",
            name: "Sign",
            price: 1.50,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        },
        {
            id: 7,
            src: "images/Stickers/BearSticker.svg",
            name: "Bear",
            price: 3.50,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        },
        {
            id: 8,
            src: "images/Stickers/IdeaSticker.svg",
            name: "Idea",
            price: 2.20,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        },
        {
            id: 9,
            src: "images/Stickers/SheepSticker.svg",
            name: "Sheep",
            price: 1.20,
            currency: "$",
            hovered: false,
            loved: false,
            added: false,
        }
    ];

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
                { stickers.map( ( sticker: IStickers, index: number, array ) => (
                    <WrapperWithoutMarginAuto
                        maxWidth = { 288 }
                    >
                        <StickerWrapper
                            id = { sticker.name }
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