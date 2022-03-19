const { join } = require('path');

exports.AppCliKernel = {
  directories: [join(__dirname, 'commands')],
};
