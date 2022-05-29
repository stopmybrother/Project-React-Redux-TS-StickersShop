import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import {
    GeneralWrapper,
    StickerDescription,
    Wrapper, WrapperFlexWithoutMarginAuto, WrapperGridWithoutMarginBottom,
    WrapperWithoutMarginAuto
} from "../../styled-components/components/Wrapper";
import { HeadingThree } from "../../styled-components/components/Heading";
import { IStickers, STICKERS } from "../../constants/stickers";
import Text from "../../styled-components/components/Text";
import {
    HiddenWrapper,
    Sticker,
    StickerWrapper
} from "../../styled-components/components/Sticker";
import { CommonButtonMarginAuto } from "../../components/common-components/Button";
import { RouterLink } from "../../components/common-components/RouterLink";

export const RelatedProducts = ( { notAddedStickers }: any ) => {
    const OnMouseEnterHandler = ( id: number ) => {
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
        STICKERS.map((sticker) => {
            sticker.added = false
            sticker.hovered = false
        })
    };
    const HandleClick = ( id: number ) => {
        STICKERS.map( ( sticker ) => {
            if (sticker.id === id) {
                sticker.added = true;
                console.log(sticker.added)
                console.log(sticker.id)
                console.log(sticker)
            }
            return sticker;
        } )
    };
    return (
        <>
            <GeneralWrapper
                paddingTop = { 24 }
                paddingBottom = { 80 }
            >
                <Wrapper
                    maxWidth = { 1232 }
                    paddingRight = { 16 }
                    paddingLeft = { 16 }
                >
                    <HeadingThree
                        marginBottom = { 48 }
                        color = { COLOR.spaceCadetPrimary }
                        textAlign = "left"
                    >
                        Related Products
                    </HeadingThree>
                    <WrapperGridWithoutMarginBottom
                        maxWidth = { 1024 }
                        columns = { 3 }
                        rows = { 1 }
                        columnWidth = { 288 }
                        rowWidth = { 336 }
                        justifyContent = "space-between"
                        rowGap = { 80 }
                    >
                        { notAddedStickers.slice( 1, 4 ).map( ( sticker: IStickers, index: number ) => (
                            <WrapperWithoutMarginAuto
                                maxWidth = { 288 }
                            >
                                <StickerWrapper
                                    key = { index }
                                    onMouseEnter = { () => OnMouseEnterHandler(sticker.id) }
                                    onMouseLeave = { OnMouseLeaveHandler }
                                >
                                    <Sticker
                                        src ={ sticker.src }
                                        alt = { sticker.name }
                                        marginBottom = { 16 }
                                        borderRadius = { 10 }
                                    />
                                </StickerWrapper>
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
                                            color = { COLOR.whitePrimary }
                                            hoverBorderColor = { COLOR.charcoalPrimary }
                                            hoverBackgroundColor = { COLOR.charcoalOpacityEighty }
                                            hoverColor = { COLOR.whitePrimary }
                                            activeBorderColor = { COLOR.whitePrimary }
                                            activeBackgroundColor = { COLOR.charcoalPrimary }
                                            activeColor = { COLOR.whitePrimary }
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
                                    </HiddenWrapper>
                                ) }

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
                    </WrapperGridWithoutMarginBottom>
                </Wrapper>
            </GeneralWrapper>
        </>
    );
};