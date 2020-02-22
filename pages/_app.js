import React from "react";
import App, { Container } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
      height: 100%;
    }
    body {
        margin: 0;
        background: red;
        height: 100%;
    }
`;

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
