import React from "react";

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

export interface IWrapperFlex extends IWrapper {
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    rowGap?: number;
    columnGap?: number;
    gridColumnStart?: number;
    gridColumnEnd?: number;
    gridRowStart?: number;
    gridRowEnd?: number;
};

export interface IWrapperGrid extends IWrapper {
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