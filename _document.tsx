import Document, { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <Link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;