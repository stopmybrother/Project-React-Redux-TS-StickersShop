import React from "react";
import styled from "styled-components";

export interface ILink {
    width?: number;
    height?: number;
};

export const Link = styled.a<ILink>`
  width: ${ p => p.width || 0 }px;
  height: ${ p => p.height || 0 }px;
`;

export interface ITextLink {
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;

    fontSize?: number;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;

    textAlign?: string;
};

export const TextLink = styled.a<ITextLink>`
  margin-top: ${ p => p.marginTop || 0 }px;
  margin-right: ${ p => p.marginRight || 0 }px;
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  margin-left: ${ p => p.marginLeft || 0 }px;

  max-width: 100%;
  width: 100%;

  font-size: ${ p => p.fontSize || 24 }px;
  font-weight: ${ p => p.fontWeight || 600 };
  line-height: ${ p => p.lineHeight || 33 }px;
  
  color: ${ p => p.color || "none" };
  text-align: ${ p => p.textAlign || "center" };
`;