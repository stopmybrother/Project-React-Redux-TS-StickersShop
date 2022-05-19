import React from "react";
import styled from "styled-components";
import { IImage } from "../../styled-components/interfaces/ImageInterface";
import { Text } from "./Text";
import { CommonButtonMarginAuto } from "../../components/common-components/Button";

export const StickerWrapper = styled.div`
  max-width: 288px;
  width: 100%;
  max-height: 288px;
  height: 100%;
  position: relative;
`;

export const HiddenWrapper = styled.div`
  padding: 208px 60px 37px;
  position: absolute;
  constent: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba( 0, 0, 0, 0.2 );
  border-radius: 5px;
`;

export const HiddenAddButton = styled( CommonButtonMarginAuto )`
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
`;


export const StickerName = styled( Text )``;

export const Price = styled( Text )``;