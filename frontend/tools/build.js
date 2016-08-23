import webpack from 'webpack';
import config from '../webpack.config.prod.js';
import colors from 'colors';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. This will take a moment....'.blue);

webpack(config).run((error, stats) => {
  if (error) {
    console.log(error.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`.green);
  console.log('The app is compiled in production mode in /dist. It\'s ready to roll!'.blue);

  return 0;
});
