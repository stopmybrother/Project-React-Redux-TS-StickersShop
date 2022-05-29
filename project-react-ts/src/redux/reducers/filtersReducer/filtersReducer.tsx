import { CHANGE_FILTER } from "../../actions/actions";
import { TFilterActionTypes } from "../../actions/filtersActionCreators/filterActionCreator";

const initialState = "all";

export const filtersReducer = ( state: string = initialState,
                               { type, payload }: TFilterActionTypes
                                ) => {
    switch ( type ) {
        case CHANGE_FILTER:
            return payload.filter;
        default:
            return state;
    };
};