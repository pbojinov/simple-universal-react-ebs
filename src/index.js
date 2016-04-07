import 'babel-polyfill';
import Bluebird from 'bluebird';
if (typeof window !== 'undefined') {
  window.Promise = Bluebird;
}

export serverMiddleware from './Router';
