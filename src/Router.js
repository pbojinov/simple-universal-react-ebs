import React from 'react';
import ReactDOM from 'react-dom';
import { renderToStaticMarkup } from 'react-dom/server';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>Hello World from SSR Component</div>
      );
  }
}

function renderComponentWithRoot() {
  const componentHtml = renderToStaticMarkup(<HelloWorld/>);
  return `<!doctype html><body>${componentHtml}</body></html>`;
}

function handleRoute(req, res) {
  const wholeHtml = renderComponentWithRoot();
  res.status(200).send(wholeHtml);
}

function serverMiddleware(req, res) {
  return handleRoute(req, res);
}

export default serverMiddleware;
