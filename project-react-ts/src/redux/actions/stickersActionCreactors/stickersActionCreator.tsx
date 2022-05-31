import { ADD_STICKER, REMOVE_STICKER, LOVE_STICKER } from "../actions";
import { IStickers } from "../../../constants/stickers";

interface IAddStickerAction {
    type: typeof ADD_STICKER;
    payload: IStickers;
};

interface IRemoveStickerAction {
    type: typeof REMOVE_STICKER;
    payload: {
        id: number;
    };
}

interface ILoveStickerAction {
    type: typeof LOVE_STICKER;
    payload: {
        id: number
    };
};

export type TStickersActionTypes = IAddStickerAction | ILoveStickerAction | IRemoveStickerAction;

export const addSticker = ( sticker:IStickers ): TStickersActionTypes => {
    return {
        type: ADD_STICKER,
        payload: {
            ...sticker
        }
    };
};

export const removeSticker = ( id: number ): TStickersActionTypes => {
    return {
        type: "REMOVE_STICKER",
        payload: {
            id
        }
    };
};

export const loveSticker = ( id: number ): TStickersActionTypes => {
    return {
        type: LOVE_STICKER,
        payload: {
            id
        }
    };
};

