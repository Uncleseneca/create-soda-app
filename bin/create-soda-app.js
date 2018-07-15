#! /usr/bin/env node

const chalk = require('chalk')
const program = require('commander')
const lib = require('..')
const pkg = require('../package.json')

const { createSodaApp } = lib

let projectName

program
  .version(pkg.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action((name) => {
    projectName = name
  })
  .allowUnknownOption()
  .parse(process.argv)

const { example } = program

createSodaApp({
  projectName,
  example,
})
