module.exports = {
  // The root dir of your project
  roots: ['<rootDir>/src'],
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/domain/**/index.ts'
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  // A map from regular expressions to paths to transformers
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // Mapper to the custom paths
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  maxConcurrency: 1
}
