import React from "react";
import styled from "styled-components";
import { IText } from "./Text";

export const HeadingOne = styled.h1<IText>`
  font-size: ${ p => p.fontSize || 40 }px;
  font-weight: ${ p => p.fontWeight || 600 };
  line-height: ${ p => p.lineHeight || 54 }px;
`;

export const HeadingTwo = styled.h2<IText>`
  font-size: ${ p => p.fontSize || 36 }px;
  font-weight: ${ p => p.fontWeight || 600 };
  line-height: ${ p => p.lineHeight || 49 }px;
`;

export const HeadingThree = styled.h3<IText>`
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  font-size: ${ p => p.fontSize || 24 }px;
  font-weight: ${ p => p.fontWeight || 600 };
  line-height: ${ p => p.lineHeight || 33 }px;
`;

export const HeadingFour = styled.h4<IText>`
  font-size: ${ p => p.fontSize || 20 }px;
  font-weight: ${ p => p.fontWeight || 700 };
  line-height: ${ p => p.lineHeight || 27 }px;
`;