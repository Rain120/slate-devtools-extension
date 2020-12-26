import Head from 'next/head';
import RichTextExample from './richtext';
import { css } from '@emotion/css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Slate Examples</title>
        <div className="page-title">Welcome Slate Examples</div>
        <div
          className={css`
            margin: 50px;
            padding: 10px;
            border: 1px solid #ccc;
          `}
        >
          <RichTextExample />
        </div>
      </Head>

      <style jsx>{`
        .page-title {
          margin-top: 50px;
          font-weight: bold;
          font-size: 34px;
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
