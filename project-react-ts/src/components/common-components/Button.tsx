import React from "react";
import styled, { css } from "styled-components";
import { IText } from "../../styled-components/components/Text";

export interface IButton extends IText{
  maxWidth?: number;
  borderRadius?: number;
  borderColor?: string;

  backGroundColor?: string;
  textShadow?: string;

  hoverBorderColor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;

  activeBorderColor?: string;
  activeBackgroundColor?: string;
  activeColor?: string;
};

export const CommonButton = styled.button<IButton>`
  margin-top: ${ p => p.marginTop || 0 }px;
  margin-right: ${ p => p.marginRight || 0 }px;
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  margin-left: ${ p => p.marginLeft || 0 }px;
  
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-right: ${ p => p.paddingRight || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  padding-left: ${ p => p.paddingLeft || 0 }px;
  
  border: 1px solid ${ p => p.borderColor || "none" };
  border-radius: ${ p => p.borderRadius || 0 }px;
  
  background-color: ${ p => p.backGroundColor || "transparent" };
  
  font-size: ${ p => p.fontSize || 24 }px;
  line-height: ${ p => p.lineHeight || 33 }px;
  font-weight: ${ p => p.fontWeight || 600 };
  color: ${ p => p.color || "none" };
  
  grid-column: ${ p => p.gridColumnStart } / ${ p => p.gridColumnEnd };
  grid-row: ${ p => p.gridRowStart } / ${ p => p.gridRowEnd };
  
  transition: all 0.3s linear;
  &:hover {
    border: 1px solid ${ p => p.hoverBorderColor };
    background-color: ${ p => p.hoverBackgroundColor };
    color: ${ p => p.hoverColor };
  }
  &:active {
    border: 1px solid ${ p => p.activeBorderColor };
    background-color: ${ p => p.activeBackgroundColor };
    color: ${ p => p.activeColor };
  }
  ${ p => p.disabled && css`
    cursor: default;
  ` }
`;

export const CommonButtonSortTag = styled(CommonButton)`
  @media ${props => props.theme.media.tabletPortrait} {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 17px;
  }
`;

export const CommonButtonMaxWidth = styled( CommonButton )`
  max-width: ${ p => p.maxWidth || 0 }px;
  @media ${props => props.theme.media.desktop} {
    margin-left: 775px;
  }
  @media ${props => props.theme.media.tabletLandscape} {
    margin-left: 715px;
  }
  @media ${props => props.theme.media.tabletLandscapeSmall} {
    margin-left: 665px;
    padding: 10px 25px;
  }
  @media ${props => props.theme.media.tabletPortrait} {
    margin-left: 440px;
    padding: 10px 15px;
  }
  @media ${props => props.theme.media.tablet} {
    margin-left: 400px;
    padding: 10px 15px;
  }
`;

export const CommonButtonMarginAuto = styled( CommonButton )`
    margin: 0 auto;
`;

export const CommonButtonWishListMarginAuto = styled( CommonButton )`
    margin: 48px auto 0;
`;

export const CommonButtonMaxWidthMarginAuto = styled( CommonButton )`
  margin: 0 auto;
  max-width: ${ p => p.maxWidth || 0 }px;
`;

export const BigButton = styled.button<IButton>`
  margin: 0 auto;
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-right: ${ p => p.paddingRight || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  padding-left: ${ p => p.paddingLeft || 0 }px;
  max-width: ${ p => p.maxWidth || 0 }px;
  width: 100%;
  
  border: 1px solid ${ p => p.color || "none" };
  border-radius: ${ p => p.borderRadius }px;
  
  background-color: ${ p => p.backGroundColor || "none" };
  
  text-shadow: 0px 4px 4px ;
  font-size: ${ p => p.fontSize || 24 }px;
  line-height: ${ p => p.lineHeight || 33 }px;
  font-weight: ${ p => p.fontWeight || 600 };
  color: ${ p => p.color || "none" };
  
  text-shadow: 0px 4px 4px ${ p => p.textShadow || "none" };
  
  transition: all 0.3s linear;
  &:hover {
    border: 1px solid ${ p => p.theme.colors.spaceCadetPrimary };
    background-color: ${ p => p.theme.colors.spaceCadetPrimary };
    color: ${ p => p.theme.colors.whiteSecondary };
  }
  &:active {
    border: 1px solid ${ p => p.theme.colors.maastrichtBlueSecondary };
    background-color: ${ p => p.theme.colors.metallicBlue };
    color: ${ p => p.theme.colors.whiteSecondary };
  }
`;