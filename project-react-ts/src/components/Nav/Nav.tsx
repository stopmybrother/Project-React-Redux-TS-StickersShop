import React from "react";
import { Nav } from "../../styled-components/components/Wrapper";
import { RouterLinkHeader } from "../common-components/RouterLink";
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
            <RouterLinkHeader
                to = "/wishList"
                width = { 26 }
                height = { 26 }
            >
                <HeartSvg />
            </RouterLinkHeader>
            <RouterLinkHeader
                to = "/basket"
                width = { 26 }
                height = { 26 }
            >
                <BasketSvg />
            </RouterLinkHeader>
        </Nav>
    );
};