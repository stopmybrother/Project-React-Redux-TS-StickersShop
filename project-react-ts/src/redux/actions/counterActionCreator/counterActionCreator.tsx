import { INCREMENT, DECREMENT } from "../actions";

interface ICounterIncrement {
    type: typeof INCREMENT;
    payload: {
        increase: number;
    };
};

interface ICounterDecrement {
    type: typeof DECREMENT;
    payload: {
        decrease: number;
    };
};

export type TCounterActionTypes = ICounterIncrement | ICounterDecrement;

export const increaseCounter = ( increase: number ): TCounterActionTypes => {
    return {
        type: INCREMENT,
        payload: {
            increase
        },
    };
};

export const decreaseCounter = ( decrease: number ): TCounterActionTypes => {
    return {
        type: DECREMENT,
        payload: {
            decrease
        },
    };
};