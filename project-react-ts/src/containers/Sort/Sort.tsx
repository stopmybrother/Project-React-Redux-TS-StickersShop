import React from "react";
import { WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper"
import { SortTags } from "../../components/SortButtons/SortButtons";
import { Select } from "../../components/Select/Select";

export interface ISortProps {
    amount?: number;
    activeFilter?: string;
    activeTag?: string;
    filterChange?: ( filter: string ) => void;
    sortSticker?: ( tag: string ) => void;
};

export const Sort = ( {
                          amount,
                          activeFilter,
                          activeTag,
                          filterChange,
                          sortSticker
                      }: ISortProps ) => {
    return (
            <WrapperFlexWithoutMarginAuto
                marginBottom = { 48 }
                maxWidth = { 1232 }
                justifyContent = "space-between"
            >
                <SortTags
                    amount = { amount }
                    activeTag = { activeTag }
                    sortSticker = { sortSticker }
                />
                <Select
                    amount = { amount }
                    activeFilter = { activeFilter }
                    filterChange = { filterChange }
                />
            </ WrapperFlexWithoutMarginAuto>
    );
};