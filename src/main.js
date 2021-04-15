import yargs from 'yargs';
import oc from './constructPattern/objectCreation';
import st from './singletonPattern';

const argv = yargs
  .option('pattern', {
    alias: 'p',
    description: `
    To show result of JS Design pattern
      *** Constructor Pattern ***
      oc -- object createion

      *** Singleton Pattern ***
      st -- single createion
    `,
    type: 'string',
  })
  .help()
  .alias('help', 'h').argv;

const { pattern } = argv;

({
  oc,
  st,
}[pattern]());
