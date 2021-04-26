import yargs from 'yargs';
import oc from './constructPattern/objectCreation';
import st from './singletonPattern';
import obs from './observerPattern';

const argv = yargs
  .option('pattern', {
    alias: 'p',
    description: `
    To show result of JS Design pattern
      *** Constructor Pattern ***
      oc -- object createion

      *** Singleton Pattern ***
      st -- single createion

      *** Observer Pattern ***
      obs -- observer pattern
    `,
    type: 'string',
  })
  .help()
  .alias('help', 'h').argv;

const { pattern } = argv;

({
  oc,
  st,
  obs,
}[pattern]());
