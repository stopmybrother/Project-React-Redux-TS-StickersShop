import React from "react";

export interface IStickers {
    id: number;
    src: string;
    name: string;
    category: string;
    price: number;
    currency: string;
    stockStatus: string;
    isRelevant: boolean;
    isNew: boolean;
    loading: boolean;
    hovered?: boolean;
    loved: boolean;
    added: boolean;
    inBasket: boolean;
};

export const STICKERS: IStickers[] = [
    {
        id: 1,
        src: "/images/Stickers/CoffeeSticker.svg",
        name: "Coffee",
        category: "drink",
        price: 1.50,
        currency: "$",
        stockStatus: "in Stock",
        isRelevant: true,
        isNew: false,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    },
    {
        id: 2,
        src: "images/Stickers/FootSticker.svg",
        name: "Foot",
        category: "other",
        price: 2.50,
        currency: "$",
        stockStatus: "in Stock",
        isRelevant: false,
        isNew: true,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    },
    {
        id: 3,
        src: "images/Stickers/GirlSticker.svg",
        name: "Girl",
        category: "other",
        price: 1.20,
        currency: "$",
        stockStatus: "out of Stock",
        isRelevant: true,
        isNew: false,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    },
    {
        id: 4,
        src: "images/Stickers/FlowersSticker.svg",
        name: "Flower",
        category: "flower",
        price: 2.30,
        currency: "$",
        stockStatus: "in Stock",
        isRelevant: false,
        isNew: true,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    },
    {
        id: 5,
        src: "images/Stickers/MacaroniSticker.svg",
        name: "Macaroni",
        category: "eat",
        price: 1.20,
        currency: "$",
        stockStatus: "out of Stock",
        isRelevant: true,
        isNew: false,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    },
    {
        id: 6,
        src: "images/Stickers/SignSticker.svg",
        name: "Sign",
        category: "sign",
        price: 1.50,
        currency: "$",
        stockStatus: "in Stock",
        isRelevant: false,
        isNew: true,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    },
    {
        id: 7,
        src: "images/Stickers/BearSticker.svg",
        name: "Bear",
        category: "animal",
        price: 3.50,
        currency: "$",
        stockStatus: "in Stock",
        isRelevant: false,
        isNew: true,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    },
    {
        id: 8,
        src: "images/Stickers/IdeaSticker.svg",
        name: "Idea",
        category: "other",
        price: 2.20,
        currency: "$",
        stockStatus: "out of Stock",
        isRelevant: true,
        isNew: false,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    },
    {
        id: 9,
        src: "images/Stickers/SheepSticker.svg",
        name: "Sheep",
        category: "animal",
        price: 1.20,
        currency: "$",
        stockStatus: "in Stock",
        isRelevant: false,
        isNew: true,
        loading: false,
        hovered: false,
        loved: false,
        added: false,
        inBasket: false,
    }
];

export interface ISortSticker {
    text: string,
    id: string,
};

export const SORT_STICKERS: ISortSticker[] = [
    {
        text: "all",
        id: "all",
    },
    {
        text: "drink",
        id: "drink",
    },
    {
        text: "eat",
        id: "eat",
    },
    {
        text: "sign",
        id: "sign",
    },
    {
        text: "flower",
        id: "flower",
    },
    {
        text: "animal",
        id: "animal",
    },
    {
        text: "other",
        id: "other",
    },
];

export interface IFilterSticker {
    text: string,
    id: string,
};

export const FILTER_STICKERS: IFilterSticker[] = [
    {
        text: "Relevance",
        id: "relevance",
    },
    {
        text: "New products first",
        id: "new",
    },
    {
        text: "Name, A to Z",
        id: "alphabet",
    },
    {
        text: "Name, Z to A",
        id: "reverseAlphabet",
    },
    {
        text: "Price, low to high",
        id: "highestPrice",
    },
    {
        text: "Price, high to low",
        id: "lowestPrice",
    },
];