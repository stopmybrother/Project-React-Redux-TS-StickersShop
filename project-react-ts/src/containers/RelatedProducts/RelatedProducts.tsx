import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import {
    GeneralWrapper,
    StickerDescription,
    Wrapper, WrapperFlexWithoutMarginAuto, WrapperGridWithoutMarginBottom,
    WrapperWithoutMarginAuto
} from "../../styled-components/components/Wrapper";
import { HeadingThree } from "../../styled-components/components/Heading";
import {IStickers, STICKERS} from "../../mock-data/stickers";
import {
    HiddenAddButton,
    HiddenWrapper, Price,
    Sticker,
    StickerName,
    StickerWrapper
} from "../../styled-components/components/Sticker";

export const RelatedProducts = () => {
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
                        { STICKERS.slice( 1, 4 ).map( ( sticker: IStickers, index: number, array ) => (
                            <WrapperWithoutMarginAuto
                                maxWidth = { 288 }
                            >
                                <StickerWrapper
                                    // onMouseEnter = { OnMouseEnterHandler }
                                    // onMouseLeave = { OnMouseLeaveHandler }
                                >
                                    <Sticker
                                        src ={ sticker.src }
                                        alt = { sticker.name }
                                        marginBottom = { 16 }
                                        borderRadius = { 10 }
                                    />
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
                    </WrapperGridWithoutMarginBottom>
                </Wrapper>
            </GeneralWrapper>
        </>
    );
};