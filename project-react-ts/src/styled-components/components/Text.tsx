import React from "react";
import styled from "styled-components";
import { COLOR } from "../color-constants";

export interface IText {
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;

    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;

    minWidth?: number;

    fontSize?: number;
    fontWeight?: number;
    lineHeight?: number;
    textAlign?: string;

    color?: string;
    backgroundColor?: string;

    gridColumnStart?: number;
    gridColumnEnd?: number;
    gridRowStart?: number;
    gridRowEnd?: number;
}

export const Text = styled.p<IText>`
  margin-top: ${ p => p.marginTop || 0 }px;
  margin-right: ${ p => p.marginRight || 0 }px;
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  margin-left: ${ p => p.marginLeft || 0 }px;
  
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-right: ${ p => p.paddingRight || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  padding-left: ${ p => p.paddingLeft || 0 }px;

  max-width: 100%;
  min-width: ${ p => p.minWidth || 0 }px;
  width: 100%;

  font-size: ${ p => p.fontSize || 24 }px;
  font-weight: ${ p => p.fontWeight || 600 };
  line-height: ${ p => p.lineHeight || 33 }px;
  
  background-color: ${ p => p.backgroundColor || "none" };
  color: ${ p => p.color || "none" };
  text-align: ${ p => p.textAlign || "center" };
  
  grid-column: ${ p => p.gridColumnStart } / ${ p => p.gridColumnEnd };
  grid-row: ${ p => p.gridRowStart } / ${ p => p.gridRowEnd };
`;
export default Text;

export const TextInForm = styled.p<IText>`
  margin-bottom: 24px;
  max-width: 100%;
  width: 100%;
  text-align: left;
  font-size: 24px;
  line-height: 33px;
  font-weight: 400;
  color: ${ COLOR.spaceCadetPrimary };
`;