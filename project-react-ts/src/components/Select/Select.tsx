import React, { useState } from "react";
import { FILTER_STICKERS, IFilterSticker } from "../../constants/stickers";
import {
    SelectWrapper,
    SelectButton,
    SelectContent,
    SelectItem,
    SelectTextWrapper,
    SelectText,
    IconFontAwesome
} from "../../styled-components/components/Select";
import { ISortProps } from "../../containers/Sort/Sort";

export const Select = ( {
                            amount,
                            activeFilter,
                            filterChange
                        }: ISortProps ) => {
    const [ isSelected, setIsSelected ] = useState( "" )
    const [ isActive, setIsActive ] = useState( false );

    return (
        <SelectWrapper
            maxWidth = { 188 }
        >
            <SelectButton
                maxWidth = { 111 }
                onClick = { () => setIsActive( !isActive ) }
            >
                <SelectTextWrapper
                    border = { isActive }
                >
                    <SelectText>
                        Sort By
                    </SelectText>

                    { isActive
                        ?
                        <IconFontAwesome className = "fa fa-angle-up"></IconFontAwesome>
                        :
                        <IconFontAwesome className = "fa fa-angle-down"></IconFontAwesome>
                    }
                </SelectTextWrapper>
            </SelectButton>

            { isActive && (
                <SelectContent>
                    { FILTER_STICKERS.map( ( option: IFilterSticker, index: number ) => (
                        <SelectItem
                            onClick = { () => {
                                setIsSelected( option.text )
                                setIsActive( false )
                                if (option && filterChange) {
                                    filterChange(option.id)
                                }
                            } }
                        >
                            { option.text }
                        </SelectItem>
                    ) ) }
                </SelectContent>
            ) }
        </SelectWrapper>
    );
};