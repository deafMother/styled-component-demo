import React from "react";
import {
  Wrapper,
  Title,
  Button,
  ButtonTwo,
  Container,
  TomatoButton,
  ReversedButton,
} from "../styles/index";
// Use Title and Wrapper like any other React component – except they're styled!
export default () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <Container>
        <Button> Normal</Button>
        <Button primary> Primary</Button>
        <TomatoButton>Tomato</TomatoButton>
        <ButtonTwo bottom>Two Button</ButtonTwo>
        <Button as="a" href="/" link>
          Link with Button styles
        </Button>

        <ReversedButton>other way</ReversedButton>
      </Container>
    </Wrapper>
  );
};
