import React, { useState } from "react";
import { SelectWrapper, SelectButton, SelectContent, SelectItem, SelectTextWrapper, SelectText, SelectArrow } from "../../styled-components/components/Select";

type TOptions = string;

export const Select = () => {
    const [ isSelected, setIsSelected ] = useState( "" )
    const [ isActive, setIsActive ] = useState( false );

    const options: TOptions[] = [
        "Relevance",
        "New products first",
        "Name, A to Z",
        "Name, Z to A",
        "Price, low to high",
        "Price, high to low",
    ]

    return (
        <SelectWrapper
            maxWidth = { 188 }
        >
            <SelectButton
                maxWidth = { 111 }
                onClick = { e => setIsActive( !isActive ) }
            >
                <SelectTextWrapper
                    border = { isActive }
                >
                    <SelectText>
                        Sort By
                    </SelectText>

                    { isActive
                        ?
                        <SelectArrow className = "fa fa-angle-up"></SelectArrow>
                        :
                        <SelectArrow className = "fa fa-angle-down"></SelectArrow>
                    }
                </SelectTextWrapper>
            </SelectButton>

            { isActive && (
                <SelectContent>
                    { options.map( option => (
                        <SelectItem
                            onClick = { e => {
                                setIsSelected( option )
                                setIsActive( false )
                            } }
                        >
                            { option }
                        </SelectItem>
                    ) ) }
                </SelectContent>
            ) }
        </SelectWrapper>
    );
};