import { combineReducers } from "redux";
import stickersReducer from "./stickersReducer/stickersReducer";
import { sortReducer } from "./sortReducer/sortReducer";
import { filtersReducer } from "./filtersReducer/filtersReducer";
import { counterReducer } from "./counterReducer/counterReducer";

const rootReducer = combineReducers( {
    stickers: stickersReducer,
    sort: sortReducer,
    filter: filtersReducer,
    count: counterReducer,
} );

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;