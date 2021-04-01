import yargs from 'yargs';
import oc from './constructPattern/objectCreation';

const argv = yargs
  .option('pattern', {
    alias: 'p',
    description: `
    To show result of JS Design pattern
      *** Constructor Pattern ***
      oc -- object createion
    `,
    type: 'string',
  })
  .help()
  .alias('help', 'h').argv;

const { pattern } = argv;

({
  oc,
}[pattern]());
