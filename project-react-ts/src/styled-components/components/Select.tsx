import React from "react";
import styled, { css } from "styled-components";
import { GeneralWrapper, WrapperWithoutMarginAuto } from "../../styled-components/components/Wrapper";
import { Text } from "./Text";

export const SelectWrapper = styled( WrapperWithoutMarginAuto )`
  max-width: ${ p => p.maxWidth || 0 }px;
  position: relative;
  user-select: none;
`;

export const SelectButton = styled( WrapperWithoutMarginAuto )`
  margin-left: auto;
  max-width: ${ p => p.maxWidth || 0 }px;
  font-weight: 600;
  color: ${ p => p.theme.colors.charcoalPrimary };
`;

export const SelectContent = styled( GeneralWrapper )`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 12px 24px;
  background-color: ${ p => p.theme.colors.whitePrimary };
  border: 1px solid ${ p => p.theme.colors.manatee };
  color: ${ p => p.theme.colors.charcoalPrimary };
  font-weight: 400;
  z-index: 3;
`;

export const SelectItem = styled.div`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
  cursor: pointer;
  font-size: 16px;
  line-height: 22px;
  transition: all 0.2s linear;
  &:hover {
    color: #9CA3A8;
  }
  &:active {
    color: #DB2C6F;
  }
`;

interface ISelectTextWrapper {
  border: boolean;
};

export const SelectTextWrapper = styled.div<ISelectTextWrapper>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: right;
  border-bottom: 1px solid #000;
  ${ p => p.border && css`
    border-bottom: none;
  ` }
`;

export const SelectText = styled( Text )`
  margin-right: ${ p => p.marginRight || 14 }px;
  font-size: ${ p => p.fontSize || 20 }px;
  line-height: ${ p => p.lineHeight || 27 }px;
`;

interface IIconFontAwesome {
  hoverBorderColor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;

  activeBorderColor?: string;
  activeBackgroundColor?: string;
  activeColor?: string;
};

export const IconFontAwesome = styled.span<IIconFontAwesome>`
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
`;