import { IStickers, STICKERS } from "../../../constants/stickers";
import { TStickersActionTypes } from "../../actions/stickersActionCreactors/stickersActionCreator";
import { ADD_STICKER, LOVE_STICKER } from "../../actions/actions";

const initialState = STICKERS;

const stickersReducer = (
                            state: IStickers[] = initialState,
                            { type, payload }: TStickersActionTypes
                          ) => {
    switch ( type ) {
        case ADD_STICKER:
            return [
                ...state, {
                    id: payload.id,
                    src: payload.src,
                    name: payload.name,
                    category: payload.category,
                    price: payload.price,
                    currency: payload.currency,
                    stockStatus: payload.stockStatus,
                    isRelevant: payload.isRelevant,
                    isNew: payload.isNew,
                    loading: payload.loading,
                    hovered: payload.hovered,
                    loved: payload.loved,
                    added: payload.added,
                    inBasket: payload.inBasket,
                }
            ];
        case LOVE_STICKER:
            return state.filter((sticker) => sticker.id === payload.id)
        default:
            return state;
    };
};
export default stickersReducer;