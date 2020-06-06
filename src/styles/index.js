// It is important to define your styled components outside of the render method, otherwise it will be recreated on every single render pass. Defining a styled component within the render method will thwart caching and drastically slow down rendering speed, and should be avoided.
// note: the theme is passed down by the theme provider as props

import React from "react";
import styled, { css } from "styled-components";
// Create a Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  text-decoration: ${(props) => (props.link ? "none" : "")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
export const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

// a custom component
export const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

// styling a custom component component
// This could be react-router-dom's Link for example
export const Link = ({ className, children }) => (
  <a className={className} href="/#">
    {children}
  </a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    color: teal;
  }
`;

//  using the attr constructor
export const Input = styled.input.attrs((props) => ({
  // we can define static props
  type: "password",

  // or we can define dynamic ones
  size: props.size || "1rem",
}))`
  color: palevioletred;
  font-size: 1rem;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

// using nested styles, to set styles if certain conditions are tre

export const ButtonTwo = styled(Button)`
  ${({ bottom }) =>
    bottom &&
    css`
      border: none;
      border-bottom: 2px solid ${({ theme }) => theme.main};
    `}
`;
