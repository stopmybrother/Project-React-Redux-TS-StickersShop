import { CHANGE_FILTER } from "../actions";

interface IChangeFilter {
    type: typeof CHANGE_FILTER;
    payload: {
        filter: string;
    };
};

export type TFilterActionTypes = IChangeFilter;

export const changeFilter = ( filter: string ): TFilterActionTypes => {
    return {
        type: CHANGE_FILTER,
        payload: {
            filter
        },
    };
};