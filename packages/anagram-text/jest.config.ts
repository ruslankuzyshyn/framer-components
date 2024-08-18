import base from '../../configuration/jest/jest.config.base';

const jestConfig = {
  ...base,
  displayName: 'anagram-text',
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!framer)',
  ],
};

export default jestConfig;
