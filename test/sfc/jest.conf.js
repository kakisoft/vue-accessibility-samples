const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '..', '..'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/app/$1',
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor',
  },
}
