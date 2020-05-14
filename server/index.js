//Global root require function to clean painful ../ cycles.
global.rootRequire = name => require(`${__dirname}/${name}`);

// global helper should be imported before importing any other file
rootRequire('helpers/global.helper');
const app = rootRequire('config/express');
rootRequire('config/mongoose');

//const helper = rootRequire('helpers/helper');
//helper.general.myFunc1();

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  app.listen(config.port, () => {
    console_log(`server started on port ${config.port} (${config.env})`, 1);
  });
}

module.exports = app;
