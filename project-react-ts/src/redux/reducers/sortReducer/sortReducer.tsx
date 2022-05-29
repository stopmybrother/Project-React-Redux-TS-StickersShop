import { SORT_STICKERS } from "../../actions/actions";
import { TSortingActionTypes } from "../../actions/sortActionCreators/sortActionCreactor";

const initialState = "all";

export const sortReducer = ( state: string = initialState,
                                { type, payload }: TSortingActionTypes
                            ) => {
    switch ( type ) {
        case SORT_STICKERS:
            return payload.tag;
        default:
            return state;
    };
};