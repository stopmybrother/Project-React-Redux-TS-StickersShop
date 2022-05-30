import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import { NavLink } from "react-router-dom";
import Text from "../../styled-components/components/Text";
import { CommonButtonMarginAuto } from "./Button";

interface IRouterLink {
    width?: number;
    height?: number;
    fontSize?: number;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
    hoverColor?: string;
    activeColor?: string;
};

export const RouterLink = styled(NavLink)<IRouterLink>`
  cursor: pointer;
  text-decoration: none;
  color: ${ p => p.color };
  &:hover {
    color: ${ p => p.hoverColor };
  }
  &:active {
    color: ${ p => p.activeColor };
  }
  @media ${props => props.theme.media.tabletPortrait} {
    font-size: 14px;
    line-height: 19px;
  }
`;

export const RouterLinkHeaderHeart = styled(NavLink)<IRouterLink>`
  cursor: pointer;
  text-decoration: none;
  width: ${ p => p.width };
  height: ${ p => p.height };
  position: relative;
`;
export const HeartsCounter = styled.span`
  position: absolute;
  content: "";
  top: -20%;
  left: 65%;
  width: 15px;
  height: 15px;
  background-color: ${ p => p.theme.colors.razzmatazzPrimary };
  color: ${ p => p.theme.colors.whitePrimary };
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
`;

export const CounterOfHearts = () => {
    return (
        <>
            <HeartsCounter>
                0
            </HeartsCounter>
        </>
    )
}; // for counting hearts in header (doesn't work)

export const RouterLinkHeaderBasket = styled(NavLink)<IRouterLink>`
  cursor: pointer;
  text-decoration: none;
  width: ${ p => p.width };
  height: ${ p => p.height };
  position: relative;
`;

export const StickersCounter = styled.span`
  position: absolute;
  content: "";
  top: -20%;
  left: 65%;
  width: 15px;
  height: 15px;
  background-color: ${ p => p.theme.colors.razzmatazzPrimary };
  color: ${ p => p.theme.colors.whitePrimary };
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
`;

export const BasketWindow = styled.div`
  padding: 50px 0;
  position: absolute;
  content: "";
  top: 100%;
  right: 0;
  width: 265px;
  height: 168px;
  background-color: ${ p => p.theme.colors.whitePrimary };
  box-shadow: 1px 1px 10px 3px ${ p => p.theme.colors.philippineGrayPrimary };
`;

export const CounterOfStickers = () => {
    return (
        <>
            <HeartsCounter>
                0
            </HeartsCounter>
        </>
    )
};// for counting added stickers in header (doesn't work)

export const BasketStatus = () => {
    return (
        <>
            <BasketWindow>
                <Text
                    marginBottom = { 31 }
                    fontSize = { 14 }
                    lineHeight = { 19 }
                    color = { COLOR.charcoalPrimary }
                >
                    Your cart is currently empty
                </Text>
                <CommonButtonMarginAuto
                    paddingTop = { 8 }
                    paddingRight = { 17 }
                    paddingBottom = { 8 }
                    paddingLeft = { 17 }
                    borderRadius = { 5 }
                    borderColor = { COLOR.spaceCadetPrimary }
                    backGroundColor = { COLOR.whitePrimary }
                    fontSize = { 12 }
                    lineHeight = { 16 }
                    hoverBorderColor = { COLOR.charcoalPrimary }
                    hoverBackgroundColor = { COLOR.charcoalOpacityEighty }
                    activeBorderColor = { COLOR.whitePrimary }
                    activeBackgroundColor = { COLOR.charcoalPrimary }
                >
                    <RouterLink
                        to = { `/home }` }
                        color = { COLOR.spaceCadetPrimary }
                        hoverColor = { COLOR.whitePrimary }
                        activeColor = { COLOR.whitePrimary }
                    >
                        View stickers
                    </RouterLink>
                </CommonButtonMarginAuto>
            </BasketWindow>
        </>
    )
}

export const RouterNavLink = styled(NavLink)<IRouterLink>`
  cursor: pointer;
  text-decoration: none;
  font-size: ${ p => p.fontSize || 14 }px;
  font-weight: ${ p => p.fontWeight || 400 };
  line-height: ${ p => p.lineHeight || 19 }px;
  color: ${ p => p.color || `${ COLOR.manatee }` };
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: calc( 100% + 8px );
    width: 7px;
    height: 1px;
    border-radius: 1px;
    background-color: ${ COLOR.manatee };
  }
  &::before {
    top: 40%;
    transform: rotate(45deg);
  }
  &::after {
    top: 64%;
    transform: rotate(-45deg);
  }
  &:last-child {
    &::before,
    &::after {
      width: 0;
      height: 0;
    }
  }
  &:hover {
    color: ${ p => p.hoverColor || `${ COLOR.metallicBlue }` };
  }
  &:active {
    color: ${ p => p.activeColor || `${ COLOR.spaceCadetPrimary }` };
  }
`;