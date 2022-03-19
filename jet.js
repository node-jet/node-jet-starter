#!/usr/bin/env node

const { JetCli, JetConsoleKernel } = require('node-jet-console');
const { AppCliKernel } = require('./src/console/kernel');

JetCli(__dirname, [JetConsoleKernel, AppCliKernel])