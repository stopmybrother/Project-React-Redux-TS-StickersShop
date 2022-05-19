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

    backgroundColor?: string;
    backgroundImage?: string;
};

export interface IWrapperFlex extends IWrapper {
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    alignItems?: string;
    rowGap?: number;
    columnGap?: number;
};

export interface IWrapperGrid extends IWrapper {
    columns: number;
    rows: number;
    columnWidth: number;
    rowWidth: number;
    justifyContent?: string;
    rowGap?: number;
    columnGap?: number;
};