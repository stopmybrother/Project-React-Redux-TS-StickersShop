import React from "react";
import { WrapperFlexWithoutMarginAuto } from "../../styled-components/components/Wrapper"
import { SortTags } from "../../components/SortButtons/SortButtons";
import { Select } from "../../components/Select/Select";

export const Sort = () => {
    return (
            <WrapperFlexWithoutMarginAuto
                marginBottom = { 48 }
                maxWidth = { 1232 }
                justifyContent = "space-between"
            >
                <SortTags />
                <Select />
            </ WrapperFlexWithoutMarginAuto>
    );
};