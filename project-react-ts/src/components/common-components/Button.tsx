import React from "react";
import styled, { css } from "styled-components";
import { IButton } from "../../styled-components/interfaces/ButtonInterface";

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

export const CommonButtonMarginAuto = styled( CommonButton )`
    margin: 0 auto;
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