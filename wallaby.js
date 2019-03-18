module.exports = function(wallaby) {
  return {
    files: ['src/**/*.js'],

    tests: ['__tests__/**/*.test.js'],

    testFramework: 'jest',
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};
// if you have a babelrc file you dont need to put presets and plugins here
// you do need to:
// -- set testFramwork to 'jest'
// -- set env type to 'node'
// -- set compilers to 'wallaby.compilers.babel'
