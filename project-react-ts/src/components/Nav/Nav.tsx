import React from "react";
import { Nav } from "../../styled-components/components/Wrapper";
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
            <Link
                width = { 26 }
                height = { 26 }
            >
                <HeartSvg />
            </Link>
            <Link
                width = { 26 }
                height = { 26 }
            >
                <BasketSvg />
            </Link>
        </Nav>
    );
};