import Document, { Html, Head, Main, NextScript } from 'next/document';
import CSSReset from '../utils/css-reset';
import GlobalCSSClasses from '../utils/global-css-classes';

export default class StorefrontDocument extends Document {
  render() {
    return (
      <Html lang="en-US" prefix="og: http://ogp.me/ns#">
        <Head>
          <link href="/static/favicon.ico" rel="icon" />
          <CSSReset />
          <GlobalCSSClasses />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
