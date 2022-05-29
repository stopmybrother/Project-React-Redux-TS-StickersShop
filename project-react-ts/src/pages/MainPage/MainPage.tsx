import React, { useState, useEffect } from "react";
import { COLOR } from "../../styled-components/color-constants";
import { Banner } from "../../containers/Banner/Banner";
import { StickersMain } from "../../containers/StickersMain/StickersMain";
import { BigButton } from "../../components/common-components/Button";

interface IPreloaderState {
    books?: any[];
};

export const MainPage = () => {
    const [ data, setData ] = useState<IPreloaderState | null>(null);
    const [ loading, setLoading ] = useState( false );

    useEffect( () => {
        setLoading( true )
        fetch( "https://api.itbook.store/1.0/new" )
            .then( ( response ) => response.json() )
            .then( ( data ) => updateState( data.books ) )
            .catch( (error) => error );

        const updateState = ( books: IPreloaderState[ keyof IPreloaderState ] ) => {
            setLoading( false );
            setData( { books } )
        }
    }, [] );

    return (
        <>
            <Banner
                paddingTop = { 142 }
                paddingBottom = { 142 }
                backgroundImage = { require("./../../images/Banners/BannerFirstPage.svg") }
            >
                <BigButton
                    paddingTop = { 8 }
                    paddingRight = { 123 }
                    paddingBottom = { 8 }
                    paddingLeft = { 123 }
                    maxWidth = { 443 }
                    borderRadius = { 5 }
                    backGroundColor = { "transparent" }
                    fontSize = { 36 }
                    lineHeight = { 49 }
                    color = { COLOR.metallicBlue }
                    textShadow = { COLOR.blackOpacityTwentyFive }
                >
                    Create your own stickers
                </ BigButton>
            </Banner>
            <StickersMain
                data = { data }
                isLoading = { loading }
            />
        </>
    );
};