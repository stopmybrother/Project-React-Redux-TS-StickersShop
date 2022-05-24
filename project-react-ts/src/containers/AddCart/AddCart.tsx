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

export const AddCart = () => {
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
                    <WrapperGridWithoutMarginAuto
                    >
                        <StickerWrapper>
                            <Sticker
                                src ="/images/Stickers/CoffeeSticker.svg"
                                alt = { "Coffee" }
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
                                Coffee
                            </Text>
                            <Text
                                marginBottom = { 36 }
                                color = { COLOR.razzmatazzPrimary }
                                textAlign = "left"
                            >
                                $1.5
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
                                Add to cart
                            </CommonButton>
                        </WrapperWithoutMarginAuto>
                        <SortTags/>
                    </WrapperGridWithoutMarginAuto>
                </Wrapper>
            </GeneralWrapper>
        </>
    );
};