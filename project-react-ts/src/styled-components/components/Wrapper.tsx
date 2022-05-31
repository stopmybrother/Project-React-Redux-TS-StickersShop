import React from "react";
import styled, { css } from "styled-components";

export interface IWrapper {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;

  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;

  maxWidth?: number;
  minWidth?: number;
  width?: number;

  maxHeight?: number;
  minHeight?: number;
  height?: number;

  gridColumnStart?: number;
  gridColumnEnd?: number;
  gridRowStart?: number;
  gridRowEnd?: number;

  backgroundColor?: string;
  backgroundImage?: string;

  borderTop?: string;
  borderBottom?: string;
};

export const GeneralWrapper = styled.div<IWrapper>`
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  margin-bottom: ${ p => p.marginBottom || 0 }px;
  max-width: 100%;
  width: 100%;
  min-height: ${ p => p.minHeight || 0 }vh;
  background-color: ${ p => p.backgroundColor || "transparent" };
  ${ p => p.backgroundImage && css`
    background-image: url( ${ p.backgroundImage || "none" } );
    background-repeat: no-repeat;
    background-size: cover;
  ` }
`;

export const HeaderWrapper = styled( GeneralWrapper )`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const Wrapper = styled.div<IWrapper>`
  margin: 0 auto;
  padding-top: ${ p => p.paddingTop || 0 }px;
  padding-right: ${ p => p.paddingRight || 0 }px;
  padding-bottom: ${ p => p.paddingBottom || 0 }px;
  padding-left: ${ p => p.paddingLeft || 0 }px;
  max-width: ${ p => p.maxWidth || 0 }px;
  width: 100%;
  @media ${props => props.theme.media.tabletPortrait} {
    padding: 0 16px;
    max-width: 632px;
  }
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
  min-width: ${ p => p.minWidth || 0 }px;
  width: 100%;
  
  border-top: 1px solid ${ p => p.borderTop || "transparent" };
  border-bottom: 1px solid ${ p => p.borderBottom || "transparent" };
  
  grid-column: ${ p => p.gridColumnStart } / ${ p => p.gridColumnEnd };
  grid-row: ${ p => p.gridRowStart } / ${ p => p.gridRowEnd };
`;

interface IWrapperFlex extends IWrapper {
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  rowGap?: number;
  columnGap?: number;
};

export const WrapperFlex = styled( Wrapper )<IWrapperFlex>`
  display: flex;
  flex-direction: ${ p => p.flexDirection || "row" };
  flex-wrap: ${ p => p.flexWrap || "nowrap" };
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
  grid-column: ${ p => p.gridColumnStart } / ${ p => p.gridColumnEnd };
  grid-row: ${ p => p.gridRowStart } / ${ p => p.gridRowEnd };
`;

export const WrapperFlexWithoutMarginAuto = styled( WrapperWithoutMarginAuto )<IWrapperFlex>`
  display: flex;
  flex-direction: ${ p => p.flexDirection || "row" };
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
  grid-column: ${ p => p.gridColumnStart } / ${ p => p.gridColumnEnd };
  grid-row: ${ p => p.gridRowStart } / ${ p => p.gridRowEnd };
`;

export const WrapperFlexWithoutMarginAutoSortTags = styled( WrapperFlexWithoutMarginAuto )`
  @media ${props => props.theme.media.tabletPortrait} {
    max-width: 435px;
    column-gap: 4px;
  }
`;

export const WrapperCartTotal = styled( WrapperWithoutMarginAuto )<IWrapperFlex>`
  display: flex;
  flex-direction: ${ p => p.flexDirection || "row" };
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
  grid-column: ${ p => p.gridColumnStart } / ${ p => p.gridColumnEnd };
  grid-row: ${ p => p.gridRowStart } / ${ p => p.gridRowEnd };
  @media ${props => props.theme.media.desktop} {
    margin-left: 760px;
  }
  @media ${props => props.theme.media.tabletLandscape} {
    margin-left: 700px;
  }
  @media ${props => props.theme.media.tabletLandscapeSmall} {
    margin-left: 610px;
  }
  @media ${props => props.theme.media.tabletPortrait} {
    margin-left: 340px;
  }
  @media ${props => props.theme.media.tablet} {
    margin-left: 300px;
  }
`;

export const WrapperFlexWithoutMargin = styled( GeneralWrapper )<IWrapperFlex>`
  display: flex;
  flex-direction: ${ p => p.flexDirection || "row" };
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  row-gap: ${ p => p.rowGap || 0 }px;
  column-gap: ${ p => p.columnGap || 0 }px;
`;

interface IWrapperGrid extends IWrapper {
  columns?: number;
  rows?: number;
  columnWidth?: number;
  rowWidth?: number;
  firstRowWidth?: number;
  secondRowWidth?: number;
  justifyContent?: string;
  alignItems?: string;
  rowGap?: number;
  columnGap?: number;
};

export const WrapperGrid = styled( Wrapper )<IWrapperGrid>`
  margin: 0 auto 48px;
  display: grid;
  grid-template-rows: repeat( ${ p => p.rows || 0 }, ${ p => p.rowWidth || 0 }px );
  grid-template-columns: repeat( ${ p => p.columns || 0 }, ${ p => p.columnWidth || 0 }px );
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  column-gap: ${ p => p.columnGap }px;
  row-gap: ${ p => p.rowGap }px;
  @media ${props => props.theme.media.tabletPortrait} {
    grid-template-rows: repeat( 3, 280px);
    grid-template-columns: repeat( 3, 180px );
    min-height: 200px;
    row-gap: 20px;
  }
`;

export const WrapperGridWithoutMarginBottom = styled( Wrapper )<IWrapperGrid>`
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat( ${ p => p.rows || 0 }, ${ p => p.rowWidth }px );
  grid-template-columns: repeat( ${ p => p.columns || 0 }, ${ p => p.columnWidth }px );
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
  column-gap: ${ p => p.columnGap }px;
  row-gap: ${ p => p.rowGap }px;
`;

export const WrapperGridWishList = styled( WrapperGridWithoutMarginBottom )`
  grid-template-columns: 480px 130px 200px 160px 230px;
  @media ${props => props.theme.media.tabletPortrait} {
    grid-template-columns: 370px 80px 120px 130px 230px;
  }
  @media ${props => props.theme.media.phone} {
    grid-template-columns: 350px 50px 120px 100px 230px;
  }
`;

export const WrapperGridBasket = styled( WrapperGridWithoutMarginBottom )`
  grid-template-columns: 480px 154px 152px 184px 230px;
  @media ${props => props.theme.media.tabletPortrait} {
    grid-template-columns: 450px 104px 152px 104px 200px;
  }
  @media ${props => props.theme.media.phone} {
    grid-template-columns: 350px 84px 152px 84px 200px;
  }
`;

export const WrapperGridWithoutMarginAuto = styled( WrapperWithoutMarginAuto )<IWrapperGrid>`
  margin-left: 120px;
  display: grid;
  grid-template-columns: 288px 220px 220px;
  grid-template-rows: 288px 40px;
  column-gap: 20px;
  row-gap: 40px;
  justify-content: ${ p => p.justifyContent || "flex-start" };
`;

export const Nav = styled.nav<IWrapperFlex>`
  max-width: ${ p => p.maxWidth || 0 }px;
  width: 100%;
  display: flex;
  justify-content: ${ p => p.justifyContent || "flex-start" };
  align-items: ${ p => p.alignItems || "center" };
`;

export interface IStickerDescription {
  maxWidth?: number;
  width?: number;
}

export const StickerDescription = styled( WrapperFlexWithoutMargin )<IStickerDescription>`
  margin-left: auto;
  max-width: ${ p => p.maxWidth || 189 }px;
  width: 100%;
  column-gap: ${ p => p.columnGap || 0 }px;
`;