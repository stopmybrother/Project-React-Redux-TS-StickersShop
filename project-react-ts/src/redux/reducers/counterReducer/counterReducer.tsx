import { INCREMENT, DECREMENT } from "../../actions/actions";
import { TCounterActionTypes } from "../../actions/counterActionCreator/counterActionCreator";

const initialState = 0;

export const counterReducer = ( state: number = initialState,
                                { type, payload }: TCounterActionTypes ) => {
    switch ( type ) {
        case INCREMENT:
            return payload.increase + 1;
        case DECREMENT:
           return payload.decrease - 1;
        default:
            return state;
    };
};