import React from "react";
import { COLOR } from "../../styled-components/color-constants";
import { Link } from "../../styled-components/components/Link";
import { InstaSvg, TwitterSvg, WhatsAppSvg, TelegramSvg, FacebookSvg } from "../../styled-components/components/Icons";
import { WrapperFlex, WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { Text } from "../../styled-components/components/Text";

export const SocialMedia = () => {
    return (
        <>
            <WrapperFlexWithoutMarginAuto
                minWidth = { 200 }
                flexDirection = "column"
                justifyContent = "space-between"
            >
                <Text
                    marginBottom = { 12 }
                    fontSize = { 14 }
                    lineHeight = { 19 }
                    color = { COLOR.charcoalPrimary }
                    textAlign = "right"
                >
                    Follow us
                </Text>
                <WrapperFlex
                    maxWidth = { 200 }
                    justifyContent = "space-between"
                >
                    <Link
                        width = { 20 }
                        height = { 20 }
                    >
                        <InstaSvg />
                    </Link>
                    <Link
                        width = { 22 }
                        height = { 20 }
                    >
                        <TwitterSvg />
                    </Link>
                    <Link
                        width = { 20 }
                        height = { 20 }
                    >
                        <WhatsAppSvg />
                    </Link>
                    <Link
                        width = { 24 }
                        height = { 20 }
                    >
                        <TelegramSvg />
                    </Link>
                    <Link
                        width = { 10 }
                        height = { 20 }
                    >
                        <FacebookSvg />
                    </Link>
                </WrapperFlex>
            </WrapperFlexWithoutMarginAuto>
        </>
    );
};