module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',  // Transpile TypeScript and JavaScript files using Babel
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(testing-library)/)',  // Make sure Jest transpiles modules from @testing-library
  ],
  testEnvironment: 'jsdom',  // For testing React components that interact with the DOM
};
