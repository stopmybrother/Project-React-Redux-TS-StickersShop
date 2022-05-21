import React from "react";

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
    backgroundColor?: string;
    color?: string;

    textAlign?: string;

    gridColumnStart?: number;
    gridColumnEnd?: number;
    gridRowStart?: number;
    gridRowEnd?: number;
};