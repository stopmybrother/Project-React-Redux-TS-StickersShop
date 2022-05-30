import React from "react";
import styled from "styled-components";

export interface IImage {
    marginBottom?: number;
    maxWidth?: number;
    width?: number;
    maxHeight?: number;
    height?: number;
    borderRadius?: number;
    src?: string;
    alt?: string;
}

export const StickerWrapper = styled.div`
  max-width: 288px;
  width: 100%;
  min-height: 288px;
  height: 100%;
  position: relative;
  @media ${props => props.theme.media.tabletPortrait} {
    max-width: 180px;
    min-height: 180px;
  }
`;

export const StickerSmallWrapper = styled.div`
  max-width: 64px;
  width: 100%;
  max-height: 64px;
  height: 100%;
`;

export const HiddenWrapper = styled.div`
  padding: 208px 60px 37px;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba( 0, 0, 0, 0.2 );
  border-radius: 5px;
  @media ${props => props.theme.media.tabletPortrait} {
    padding: 118px 20px 27px;
  }
`;

export const Heart = styled.div`
  position: absolute;
  margin: auto;
  top: -83%;
  right: 0;
  bottom: 0;
  left: 83%;
  background-color: ${ p => p.theme.colors.charcoalPrimary };
  height: 15px;
  width: 15px;
  transform: rotate(-45deg);
  cursor: pointer;
  &:hover {
    background-color: ${ p => p.theme.colors.razzmatazzLightPrimary };
  }
  &:active {
    background-color: ${ p => p.theme.colors.razzmatazzPrimary };
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${ p => p.theme.colors.charcoalPrimary };
    &:hover {
      background-color: ${ p => p.theme.colors.razzmatazzLightPrimary };
    }
    &:active {
      background-color: ${ p => p.theme.colors.razzmatazzPrimary };
    }
  }
  &::after {
    top: 0px;
    left: 7px;
  }
  &::before {
    top: -7px;
    left: 0px;
  }
`;

export const Sticker = styled.img<IImage>`
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  max-width: ${ p => p.maxWidth || 288 }px;
  width: 100%;
  max-height: ${ p => p.maxHeight || 288 }px;
  height: 100%;
  border-radius: ${ p => p.borderRadius || 0 }px;
  cursor: pointer;
  position: relative;
  @media ${props => props.theme.media.tabletPortrait} {
    max-width: 180px;
    max-height: 180px;
  }
`;

