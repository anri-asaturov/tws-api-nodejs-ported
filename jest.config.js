module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: [
    //"json",
    //'text',
    'lcov'
    //'clover'
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/']
};
