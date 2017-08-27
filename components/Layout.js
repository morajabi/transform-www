import React from "react";
import isBrowser from "is-in-browser";
import Link from "next/link";
import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";
import GithubCorner from "react-github-corner";
import FuzzyPicker, { FuzzyWrapper } from "react-fuzzy-picker";

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = url => {
  if (url.indexOf("code=") === -1) {
    NProgress.start();
  }
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const routes = [
  {
    label: "JSON to React PropTypes",
    path: "/"
  },
  {
    label: "JSON to Flow Types",
    path: "/json-to-flow-types",
  },
  {
    label: "JSON to Typescript Interface",
    path: "/json-to-ts-interface"
  },
  {
    label: "JSON to MobX-State-Tree Model",
    path: "/json-to-mobx-state-tree"
  },
  {
    label: "CSS to JS Objects",
    path: "/css-to-js"
  },
  {
    label: "HTML to JSX",
    path: "/html-to-jsx"
  },
  {
    label: "JSON to Rust Serde",
    path: "/json-to-rust-serde"
  },
  {
    label: "JSON to Mongoose Schema",
    path: "/json-to-mongoose"
  },
  {
    label: "JSON to Big Query Schema",
    path: "/json-to-big-query"
  },
  {
    label: "JSON to MySQL",
    path: "/json-to-mysql"
  },
  {
    label: "JSON to GraphQL Schema",
    path: "/json-to-graphql"
  }
];

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      fill="#ffffff"
      width="190"
    >
      <path d="M68.6 34c-2.6 0-4.7 1.6-5.7 3.8l-25.4-6v-.4c0-3.4-2.8-6.2-6.2-6.2-3.4 0-6.2 2.8-6.2 6.2 0 3.1 2.2 5.6 5.2 6.1v25.1c-2.9.5-5.2 3-5.2 6.1 0 3.4 2.8 6.2 6.2 6.2 3.1 0 5.6-2.2 6.1-5.2h16.7c.5 2.9 3 5.2 6.1 5.2 3.4 0 6.2-2.8 6.2-6.2 0-2.4-1.4-4.4-3.3-5.5l4.8-16.9c.3 0 .6.1.9.1 3.4 0 6.2-2.8 6.2-6.2-.2-3.4-3-6.2-6.4-6.2zm0 10.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2zM31.4 27.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2zm4.1 41.4c0 2.3-1.9 4.2-4.2 4.2-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c2.4.1 4.2 1.9 4.2 4.2zm24.7 4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm.9-10.3c-.3 0-.6-.1-.9-.1-3.1 0-5.6 2.2-6.1 5.2H37.5C37 65 35 63 32.4 62.5v-25c2.1-.3 3.9-1.8 4.7-3.7l25.4 6v.4c0 2.4 1.4 4.5 3.4 5.5l-4.8 16.8z" />
    </svg>
  );
}

function trackingScript() {
  (function(i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }), (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );

  ga("create", "UA-60624235-5", "auto");
  ga("send", "pageview");
}

function renderFuzzyPicker(isOpen, onClose) {
  return (
    <FuzzyPicker
      isOpen={isOpen}
      onClose={onClose}
      onChange={choice => Router.push(choice.path)}
      items={routes}
      itemValue={item => item.label}
      renderItem={item =>
        <span>
          {item.label}
        </span>}
    />
  );
}

// Here, we check what key must be pressed to open the fuzzy picker
// We'll use the '/' key for this example.
function isCorrectKeyPressed(event) {
  return event.metaKey && event.key === "p";
}

export default function({ children, pathname }) {
  function getClass(path) {
    return path === pathname ? "active" : "";
  }

  return (
    <div className="main-wrapper">
      <Head>
        <title>Transform | All important transforms at one place.</title>
        <meta
          rel="description"
          content="An online utility to convert a JSON object to prop-types, Typescript Interface, Rust serde or flow types. It also converts your CSS into JS and HTML into JSX."
        />
        <meta
          name="google-site-verification"
          content="bjJSOEahdert-7mwVScrwTTUVR3nSe0bEj5YjevUNn0"
        />
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      </Head>
      <style jsx>{`
        .sidebar {
          height: 100vh;
          width: 250px;
          background-color: #424242;
          font-size: 15px;
          display: flex;
          flex-direction: column;
        }

        .main-wrapper {
          flex-direction: row;
          display: flex;
          flex: 1;
        }

        .content {
          flex: 1;
        }

        ul {
          padding: 20px 0;
          flex: 1;
          overflow-y: scroll;
        }

        li {
          color: whitesmoke;
          font-family: 'Lato', sans-serif;
          line-height: 44px;
          cursor: pointer;
        }

        li.active {
          background-color: #333;
        }

        li:hover {
          color: #fff;
          background-color: #2d2d2d;
        }

        a:not(.twitter):not(.github) {
          display: block;
          padding-left: 15px;
        }

        a {
          color: #fff;
          text-decoration: none;
        }

        .twitter {
          color: #6dc7ff;
        }

        .logo {
          height: 180px;
          margin: 0 auto;
        }

        .footer {
          height: 70px;
          text-align: center;
          color: #fff;
          font-family: 'Lato', sans-serif;
        }

        .footer svg {
          height: 36px;
          width: 30px;
          color: #fff;
        }

        .badge {
          display: inline-block;
          font-size: 12px;
          position: absolute;
          margin-top: 6px;
          margin-left: 6px;
          background-color: #2196f3;
          height: 13px;
          padding: 2px 4px;
          border-radius: 2px;
          line-height: 12px;
        }

        iframe {
          border: 0;
          overflow: hidden;
          display: table;
          margin: 0 auto;
          width: 61px;
          height: 20px;
        }
      `}</style>

      <FuzzyWrapper
        isKeyPressed={isCorrectKeyPressed}
        popup={renderFuzzyPicker}
      />
      <div className="sidebar">
        <GithubCorner
          href="https://github.com/ritz078/transform-www"
          height={80}
          width={80}
          direction="left"
        />
        <div className="logo">
          <Logo />
        </div>
        <ul>
          {routes.map(route =>
            <li key={route.path} className={getClass(route.path)}>
              <Link prefetch href={route.path}>
                <a>
                  {route.label}
                </a>
              </Link>
            </li>
          )}
        </ul>

        <div className="footer">
          <br />Created by{" "}
          <a
            target="_blank"
            className="twitter"
            href="https://twitter.com/ritz078"
          >
            @ritz078
          </a>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
      <script>
        {isBrowser && trackingScript()}
      </script>
    </div>
  );
}
