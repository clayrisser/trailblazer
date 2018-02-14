import path from 'path';
import trailpackExpress from 'trailpack-express';
import trailpackRepl from 'trailpack-repl';
import trailpackRouter from 'trailpack-router';

export default {
  packs: [trailpackRepl, trailpackRouter, trailpackExpress],

  paths: {
    root: path.resolve(__dirname, '..'),
    temp: path.resolve(__dirname, '..', '.tmp'),
    www: path.resolve(__dirname, '..', 'public')
  }
};
