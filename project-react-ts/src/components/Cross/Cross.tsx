import React from "react";
import styled from "styled-components";

interface ICross {
    marginLeft?: number;
    width?: number;
    height?: number;
    widthSpan?: number;
    heightSpan?: number;
    backgroundColorSpan?: string;
    hoverBackgroundColorSpan?: string;
    activeBackgroundColorSpan?: string;
    gridColumnStart?: number;
    gridColumnEnd?: number;
    gridRowStart?: number;
    gridRowEnd?: number;
}

const CrossWrapper = styled.div<ICross>`
  position: relative;
  cursor: pointer;
  margin-left: ${ p => p.marginLeft || 0 }px;
  width: ${ p => p.width || 0 }px;
  height: ${ p => p.height || 0 }px;
  grid-column: ${ p => p.gridColumnStart } / ${ p => p.gridColumnEnd };
  grid-row: ${ p => p.gridRowStart } / ${ p => p.gridRowEnd };
  
  & span {
    top: 20px;
    left: 8px;
    background-color: ${ p => p.backgroundColorSpan || "none" };
  }
  
  transition: all 0.5s linear;
  &:hover {
    & span {
      background-color: ${ p => p.hoverBackgroundColorSpan || "none" };
    }
  }

  &:active {
    & span {
      background-color: ${ p => p.activeBackgroundColorSpan || "none" };
    }
  }

  & span:nth-child(1) {
    transform: rotate(45deg);
  }

  & span:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

const CrossSpan = styled.span<ICross>`
  position: absolute;
  width: ${ p => p.widthSpan || 0 }px;
  height: ${ p => p.heightSpan || 0}px;
`;

export const Cross = ( {
                           marginLeft,
                           width,
                           height,
                           widthSpan,
                           heightSpan,
                           gridColumnStart,
                           gridColumnEnd,
                           gridRowStart,
                           gridRowEnd,
                           backgroundColorSpan,
                           hoverBackgroundColorSpan,
                           activeBackgroundColorSpan,
                        }:ICross ) => {
    return (
        <>
            <CrossWrapper
                marginLeft = { marginLeft }
                width = { width }
                height = { height }
                backgroundColorSpan = { backgroundColorSpan }
                hoverBackgroundColorSpan = { hoverBackgroundColorSpan }
                activeBackgroundColorSpan = { activeBackgroundColorSpan }
                gridColumnStart = { gridColumnStart }
                gridColumnEnd = { gridColumnEnd }
                gridRowStart = { gridRowStart }
                gridRowEnd = { gridRowEnd }
            >
                <CrossSpan
                    widthSpan = { widthSpan }
                    heightSpan = { heightSpan }

                />
                <CrossSpan
                    widthSpan = { widthSpan }
                    heightSpan = { heightSpan }
                />
            </CrossWrapper>
        </>
    );
};