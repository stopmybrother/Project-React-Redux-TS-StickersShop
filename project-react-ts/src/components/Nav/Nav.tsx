import React from "react";
import { Nav } from "../../styled-components/components/Wrapper";
import {
    RouterLinkHeaderBasket,
    RouterLinkHeaderHeart,
    CounterOfHearts,
    CounterOfStickers,
    BasketStatus
} from "../common-components/RouterLink";
import { Link } from "../../styled-components/components/Link";
import { LoupeSvg, HeartSvg, BasketSvg } from "../../styled-components/components/Icons";

export const NavMenu = () => {
    return (
        <Nav
            maxWidth = { 180 }
            justifyContent = "space-between"
        >
            <Link
                width = { 26 }
                height = { 26 }
            >
                <LoupeSvg />
            </Link>
            <RouterLinkHeaderHeart
                to = "/wishList"
                width = { 26 }
                height = { 26 }
            >
                <HeartSvg />
                <CounterOfHearts/>
            </RouterLinkHeaderHeart>
            <RouterLinkHeaderBasket
                to = "/basket"
                width = { 26 }
                height = { 26 }
            >
                <BasketSvg />
                <CounterOfStickers />
                {/*<BasketStatus /> // for modal window on basket-hover (doesn't work)*/}
            </RouterLinkHeaderBasket>
        </Nav>
    );
};