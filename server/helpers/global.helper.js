const config = rootRequire('config/config');

const log_level = {
  0: 'LOG',
  1: 'INFO',
  2: 'WARNING',
  3: 'ERROR'
};

//TODO: Beautify console logs
let console_log = function () {
  if (config.debug) {
    let message = '';

    if (typeof arguments[1] == 'undefined') {
      arguments[1] = 0;
    }

    if (typeof arguments[1] == 'number') {
      message = '[' + log_level[arguments[1]] + ']: ';
      if (typeof arguments[0] == 'string') {
        message += arguments[0];
      } else {
        message = arguments;
      }
    } else {
      message = arguments;
    }

    console.log(message);
  }
}

let console_die = function(){
  console_log();
  process.exit();
}

global.config = config;
global.console_log = console_log;
global.console_die = console_die;
