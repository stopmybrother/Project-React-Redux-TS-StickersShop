import React from "react";

export interface IStickers {
    id: number;
    src: string;
    name: string;
    price: number;
    currency: string;
    stockStatus: string;
    hovered?: boolean;
    loved: boolean;
    added: boolean;
};

export const STICKERS: IStickers[] = [
    {
        id: 1,
        src: "/images/Stickers/CoffeeSticker.svg",
        name: "Coffee",
        price: 1.50,
        currency: "$",
        stockStatus: "in Stock",
        hovered: false,
        loved: false,
        added: false,
    },
    {
        id: 2,
        src: "images/Stickers/FootSticker.svg",
        name: "Foot",
        price: 2.50,
        currency: "$",
        stockStatus: "in Stock",
        hovered: false,
        loved: false,
        added: false,
    },
    {
        id: 3,
        src: "images/Stickers/GirlSticker.svg",
        name: "Girl",
        price: 1.20,
        currency: "$",
        stockStatus: "out of Stock",
        hovered: false,
        loved: false,
        added: false,
    },
    {
        id: 4,
        src: "images/Stickers/FlowersSticker.svg",
        name: "Flower",
        price: 2.30,
        currency: "$",
        stockStatus: "in Stock",
        hovered: false,
        loved: false,
        added: false,
    },
    {
        id: 5,
        src: "images/Stickers/MacaroniSticker.svg",
        name: "Macaroni",
        price: 1.20,
        currency: "$",
        stockStatus: "out of Stock",
        hovered: false,
        loved: false,
        added: false,
    },
    {
        id: 6,
        src: "images/Stickers/SignSticker.svg",
        name: "Sign",
        price: 1.50,
        currency: "$",
        stockStatus: "in Stock",
        hovered: false,
        loved: false,
        added: false,
    },
    {
        id: 7,
        src: "images/Stickers/BearSticker.svg",
        name: "Bear",
        price: 3.50,
        currency: "$",
        stockStatus: "in Stock",
        hovered: false,
        loved: false,
        added: false,
    },
    {
        id: 8,
        src: "images/Stickers/IdeaSticker.svg",
        name: "Idea",
        price: 2.20,
        currency: "$",
        stockStatus: "out of Stock",
        hovered: false,
        loved: false,
        added: false,
    },
    {
        id: 9,
        src: "images/Stickers/SheepSticker.svg",
        name: "Sheep",
        price: 1.20,
        currency: "$",
        stockStatus: "in Stock",
        hovered: false,
        loved: false,
        added: false,
    }
];

export type ITags = string;

export const TAGS: ITags[] = [
    "all",
    "drink",
    "eat",
    "sign",
    "flower",
    "animal",
    "coffee"
];