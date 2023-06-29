module.exports = {
  testEnvironment: 'jest-environment-node',
  verbose: true,
  setupFiles: ['./test/setup.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.scafflater/init/test']
}
