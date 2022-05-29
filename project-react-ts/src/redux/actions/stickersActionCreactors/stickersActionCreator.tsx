import { ADD_STICKER, LOVE_STICKER } from "../actions";
import { IStickers } from "../../../constants/stickers";

interface IAddStickerAction {
    type: typeof ADD_STICKER;
    payload: IStickers;
};

interface ILoveStickerAction {
    type: typeof LOVE_STICKER;
    payload: IStickers;
};

export type TStickersActionTypes = IAddStickerAction | ILoveStickerAction;

export const addSticker = ( sticker:IStickers ) => {
    return {
        type: ADD_STICKER,
        payload: {
            ...sticker
        }
    };
};

export const loveSticker = ( id: number ) => {
    return {
        type: LOVE_STICKER,
        payload: {
            id
        }
    };
};

