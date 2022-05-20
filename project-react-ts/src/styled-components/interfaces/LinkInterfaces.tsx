import React from "react";

export interface ILink {
    width?: number;
    height?: number;
};

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