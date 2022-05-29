import React from "react";
import {
    GeneralWrapper,
    Wrapper,
    WrapperGridWithoutMarginAuto,
    WrapperWithoutMarginAuto
} from "../../styled-components/components/Wrapper";
import Text from "../../styled-components/components/Text";
import {
    Sticker,
    StickerWrapper
} from "../../styled-components/components/Sticker";
import { COLOR } from "../../styled-components/color-constants";
import { SortTags } from "../../components/SortButtons/SortButtons";
import { TextLink } from "../../styled-components/components/Link";
import { CommonButton } from "../../components/common-components/Button";
import { Counter } from "../../components/Counter/Counter";
import { RouterLink } from "../../components/common-components/RouterLink";
import { STICKERS, IStickers } from "../../constants/stickers";

export const AddCart = ( { addedSticker }: any ) => {
    STICKERS.map((sticker) => sticker.added = false);
    const HandleAddClick = ( id: number ) => {
        STICKERS.map((sticker: IStickers) => {
            if (sticker.id === id) {
                sticker.loved = false;
                sticker.inBasket = true;
                console.log(sticker)
            }
            return sticker;
        })
    }
    return (
        <>
            <GeneralWrapper
                paddingTop = { 48 }
                paddingBottom = { 24 }
            >
                <Wrapper
                    maxWidth = { 1232 }
                    paddingRight = { 16 }
                    paddingLeft = { 16 }
                >
                    { addedSticker.map( ( sticker: IStickers ) => (
                    <WrapperGridWithoutMarginAuto
                    >
                            <StickerWrapper>
                                <Sticker
                                    src = { sticker.src }
                                    alt = { sticker.name }
                                    borderRadius = { 10 }
                                />
                            </StickerWrapper>
                        <WrapperWithoutMarginAuto
                            marginBottom = { 48 }
                            maxWidth = { 211 }
                        >
                                <Text
                                    marginBottom = { 24 }
                                    fontSize = { 36 }
                                    lineHeight = { 49 }
                                    color = { COLOR.spaceCadetPrimary }
                                    textAlign = "left"
                                >
                                    { sticker.name}
                                </Text>
                                <Text
                                    marginBottom = { 36 }
                                    color = { COLOR.razzmatazzPrimary }
                                    textAlign = "left"
                                >
                                    { sticker.price }{ sticker.currency }
                                </Text>
                                <TextLink
                                    marginBottom = { 33 }
                                    fontSize = { 14 }
                                    lineHeight = { 19 }
                                    fontWeight = { 400 }
                                    color = { COLOR.spaceCadetPrimary }
                                    textAlign = "left"
                                >
                                    More information about sticker
                                </TextLink>
                            <Counter
                                colorText = { COLOR.whiteSecondary }
                                backgroundColorText = { COLOR.metallicBlue }
                            />
                        </WrapperWithoutMarginAuto>

                        <WrapperWithoutMarginAuto
                            maxWidth = { 170 }
                        >
                            <CommonButton
                                marginTop = { 237 }
                                paddingTop = { 12 }
                                paddingRight = { 32 }
                                paddingBottom = { 12 }
                                paddingLeft = { 32 }
                                borderRadius = { 5 }
                                borderColor = { COLOR.metallicBlue }
                                backGroundColor = { COLOR.metallicBlue }
                                fontSize = { 18 }
                                lineHeight = { 25 }
                                color = { COLOR.whitePrimary }
                                hoverBorderColor = { COLOR.charcoalPrimary }
                                hoverBackgroundColor = { COLOR.charcoalPrimary }
                                hoverColor = { COLOR.whiteSecondary }
                                activeBorderColor = { COLOR.maastrichtBlueSecondary }
                                activeBackgroundColor = { COLOR.maastrichtBlueSecondary }
                                activeColor = { COLOR.whitePrimary }
                            >
                                <RouterLink
                                    to = "/home"
                                    color = { COLOR.whitePrimary }
                                    hoverColor = { COLOR.whitePrimary }
                                    activeColor = { COLOR.whitePrimary }
                                    onClick = { () => HandleAddClick( sticker.id ) }
                                >
                                    Add to cart
                                </RouterLink>
                            </CommonButton>
                        </WrapperWithoutMarginAuto>
                        <SortTags/>
                    </WrapperGridWithoutMarginAuto>
                    )) }
                </Wrapper>
            </GeneralWrapper>
        </>
    );
};