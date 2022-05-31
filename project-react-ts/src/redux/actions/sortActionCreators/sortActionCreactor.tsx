import { SORT_STICKERS } from "../actions";

interface ISortStickerAction {
    type: typeof SORT_STICKERS;
    payload: {
        tag: string
    };
};

export type TSortingActionTypes = ISortStickerAction;

export const sortStickers = ( tag: string ): TSortingActionTypes => {
    return {
        type: SORT_STICKERS,
        payload: {
            tag
        }
    };
};