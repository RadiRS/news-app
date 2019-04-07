import React, { Component } from 'react';
import styled from 'styled-components';
import { ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import HTML from 'react-native-render-html';

const htmlContent = `
  <h1>This HTML snippet is now rendered with native components !</h1>
  <h2>Enjoy a webview-free and blazing fast application</h2>
  <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
  <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export class ArticleScreen extends Component {
  handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://facebook.github.io/react-native/';
      const redirectTo = `window.location = "${newURL}"`;
      this.webview.injectJavaScript(redirectTo);
    }
  };

  render() {
    const { url } = this.props.navigation.state.params;
    const run = `
      var header = document.querySelector('header');
      var footer = document.querySelector('footer');
      var nav = document.querySelector('nav');
      header.style.display = 'none';
      footer.style.display = 'none';
      nav.style.display = 'none';
      true
    `;

    setTimeout(() => {
      this.webref.injectJavaScript(run);
    }, 3000);
    return (
      <Container>
        <WebView
          scalesPageToFit
          ref={r => (this.webref = r)}
          startInLoadingState
          source={{ uri: url }}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
        />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleScreen);

const Container = styled.View`
  width: 100%;
  flex: 1;
`;

const Content = styled.View`
  height: 100%;
  width: 100%;
  background-color: blue;
`;

const Text = styled.Text``;
