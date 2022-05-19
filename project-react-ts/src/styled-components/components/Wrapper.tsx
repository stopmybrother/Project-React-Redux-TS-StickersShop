import React from "react";
import styled, { css } from "styled-components";
import { IWrapper, IWrapperFlex, IWrapperGrid } from "../interfaces/WrapperInterfaces";
import { IStickerDescription } from "../interfaces/StickerDescriptionInterface";

export const GeneralWrapper = styled.div<IWrapper>`
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  max-width: 100%;
  width: 100%;
  background-color: ${ p => p.backgroundColor || "none" };
  
  ${ p => p.backgroundImage && css`
    background-image: url( ${ p.backgroundImage || "none" } );
    background-repeat: no-repeat;
    background-size: cover;
  ` }
`;

export const Wrapper = styled.div<IWrapper>`
  margin: 0 auto;
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-right: ${ p => p.paddingRight || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  padding-left: ${ p => p.paddingLeft || 0 }px;
  max-width: ${ p => p.maxWidth || 0 }px;
  width: 100%;
`;

export const WrapperWithoutMarginAuto = styled.div<IWrapper>`
  margin-top: ${ p => p.marginTop || 0 }px;
  margin-right: ${ p => p.marginRight || 0 }px;
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  margin-left: ${ p => p.marginLeft || 0 }px;
  
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-right: ${ p => p.paddingRight || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  padding-left: ${ p => p.paddingLeft || 0 }px;
  
  max-width: ${ p => p.maxWidth || 0 }px;
  width: 100%;
`;

export const WrapperFlex = styled( Wrapper )<IWrapperFlex>`
  display: flex;
  flex-direction: ${ p => p.flexDirection || "row" };
  flex-wrap: ${ p => p.flexWrap || "nowrap" };
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
`;

export const WrapperFlexWithoutMarginAuto = styled( WrapperWithoutMarginAuto )<IWrapperFlex>`
  display: flex;
  flex-direction: ${ p => p.flexDirection || "row" };
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
`;

export const WrapperFlexWithoutMargin = styled( GeneralWrapper )<IWrapperFlex>`
  display: flex;
  flex-direction: ${ p => p.flexDirection || "row" };
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
`;

export const WrapperGrid = styled( Wrapper )<IWrapperGrid>`
  margin: 0 auto 48px;
  display: grid;
  grid-template-columns: repeat( ${ p => p.columns || 0 }, ${ p => p.columnWidth }px );
  grid-template-rows: repeat( ${ p => p.rows || 0 }, ${ p => p.rowWidth }px );
  justify-content: ${ p => p.justifyContent || "flex-start" };
  column-gap: ${ p => p.columnGap }px;
  row-gap: ${ p => p.rowGap }px;
`;

export const Nav = styled.nav<IWrapperFlex>`
  max-width: ${ p => p.maxWidth || 0 }px;
  width: 100%;
  display: flex;
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
`;

export const StickerDescription = styled( WrapperFlexWithoutMargin )<IStickerDescription>`
  margin-left: auto;
  max-width: ${ p => p.maxWidth || 189 }px;
  width: 100%;
  column-gap: ${ p => p.columnGap || 0 }px;
`;