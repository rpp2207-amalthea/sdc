module.exports = {
  // projects: [
  //   {
  //     collectCoverage: true,
  //     collectCoverageFrom: ["<rootDir>/client/src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/"],
  //     coverageDirectory: '../coverage',
  //     coverageThreshold: {
  //       "global": {
  //         "lines": 80,
  //         "statements": 80
  //       }},
  //     testEnvironment: 'jsdom',
  //     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  //     moduleNameMapper: {
  //       "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
  //       // '^[@./a-zA-Z0-9$_-]+\\.(png)$': 'RelativeImageStub',
  //       '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': 'RelativeImageStub',
  //       '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
  //     },
  //     testPathIgnorePatterns: [
  //       "/node_modules/"
  //     ],
  //     verbose: true
  //   },
  //   {
  //     collectCoverage: true,
  //     collectCoverageFrom: [
  //     "<rootDir>/server/**/*.js",
  //     "!<rootDir>/node_modules/"],
  //     coverageDirectory: '../coverage',
  //     coverageThreshold: {
  //       "global": {
  //         "lines": 80,
  //         "statements": 80
  //       }},
  //     testEnvironment: 'node',
  //     setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  //     moduleNameMapper: {
  //       "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
  //       // '^[@./a-zA-Z0-9$_-]+\\.(png)$': 'RelativeImageStub',
  //       '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': 'RelativeImageStub',
  //       '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
  //     },
  //     testPathIgnorePatterns: [
  //       "/node_modules/"
  //     ],
  //     verbose: true
  //   }
    // ]
    collectCoverage: true,
    collectCoverageFrom: ["<rootDir>/client/src/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/server/**/*.js",
    "!<rootDir>/node_modules/"],
    coverageDirectory: '../coverage',
    coverageThreshold: {
      "global": {
        "lines": 80,
        "statements": 80
      }},
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
      // '^[@./a-zA-Z0-9$_-]+\\.(png)$': 'RelativeImageStub',
      '^[@./a-zA-Z0-9$_-]+\\.(png|gif)$': 'RelativeImageStub',
      '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
    },
    testPathIgnorePatterns: [
      "/node_modules/"
    ],
    verbose: true,
}