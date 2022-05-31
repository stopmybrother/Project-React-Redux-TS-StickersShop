import { TRootState } from "../../reducers/rootReducer";

export const counterSelector = ( state: TRootState ) => state.count;