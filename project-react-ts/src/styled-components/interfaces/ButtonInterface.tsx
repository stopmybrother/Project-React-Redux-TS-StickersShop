import React from "react";
import { IText } from "./TextInterfaces";

export interface IButton extends IText{
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    maxWidth?: number;
    borderRadius?: number;
    borderColor?: string;

    backGroundColor?: string;
    textShadow?: string;

    hoverBorderColor?: string;
    hoverBackgroundColor?: string;
    hoverColor?: string;

    activeBorderColor?: string;
    activeBackgroundColor?: string;
    activeColor?: string;
};