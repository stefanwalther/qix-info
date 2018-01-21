#!/usr/bin/env node
const fn = require('./cli-funcs');

const yargs = require('yargs');

yargs
  .option('host', {
    alias: 'h',
    default: 'localhost'
  })
  .option('port', {
    alias: 'p',
    default: 9076
  })
  .option('verbose', {
    alias: 'v',
    default: false
  })
  // .command('$0', 'CLI to get some information from QIX using enigma.js.', () => {}, () => {
  //   yargs.showHelp();
  // })
  .command({
    command: 'list-apps',
    aliases: ['la'],
    desc: 'List all apps',
    //builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
      fn.listApps(argv);
    }
  })
  .command({
    command: 'get-defaults',
    desc: 'Get the default configuration options',
    handler: (argv) => {
      console.log(`host: ${argv.host}`);
      console.log(`port: ${argv.port}`);
    }
  })
  .demandCommand(1, 'You need at least one command before moving on.')
  .showHelpOnFail(false, 'Specify --help for available options')
  .help('help')
  .argv;

