import yargs from 'yargs';

const argv = yargs
  .option('pattern', {
    alias: 'p',
    description: `
      To show result of JS Design pattern
      oc -- object createion
    `,
    type: 'string',
  })
  .help()
  .alias('help', 'h').argv;

const { pattern } = argv;

console.log('pattern', pattern);
