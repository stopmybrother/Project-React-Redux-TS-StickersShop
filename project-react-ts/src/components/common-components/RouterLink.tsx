import React from "react";
import styled from "styled-components";
import { COLOR } from "../../styled-components/color-constants";
import { NavLink } from "react-router-dom";

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

export const RouterLinkHeader = styled(NavLink)<IRouterLink>`
  cursor: pointer;
  text-decoration: none;
  width: ${ p => p.width };
  height: ${ p => p.height };
`;

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
`;

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