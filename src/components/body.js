import React from "react";
import { Container, StyledLink, Input } from "../styles/index";
// Use Title and Wrapper like any other React component – except they're styled!
export default () => {
  return (
    <Container>
      <StyledLink>liky styled</StyledLink>
      <Input placeholder="normal size" />
      <Input placeholder="doubel size" size="2rem" />
    </Container>
  );
};
