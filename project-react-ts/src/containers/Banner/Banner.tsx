import React from "react";
import { GeneralWrapper, Wrapper } from "../../styled-components/components/Wrapper";

interface IBanner {
    paddingTop: number;
    paddingBottom: number;
    backgroundImage: string;
    children?: React.ReactNode;
};

export const Banner = ( {
                            backgroundImage,
                            paddingTop,
                            paddingBottom,
                            children
                        }: IBanner ) => {
    return (
        <GeneralWrapper
            paddingTop = { paddingTop }
            paddingBottom = { paddingBottom }
            backgroundImage = { backgroundImage }
        >
            <Wrapper
                maxWidth = { 1232 }
                paddingRight = { 16 }
                paddingLeft = { 16 }
            >
                { children }
            </Wrapper>
        </GeneralWrapper>
    );
};
