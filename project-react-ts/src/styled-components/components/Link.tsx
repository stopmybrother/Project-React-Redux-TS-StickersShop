import React from "react";
import styled from "styled-components";
import { ILink } from "../interfaces/LinkInterfaces";

export const Link = styled.a<ILink>`
  width: ${ p => p.width || 0 }px;
  height: ${ p => p.height || 0 }px;
`;