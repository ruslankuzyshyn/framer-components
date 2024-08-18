// @ts-nocheck
import path from 'path';

const configuration = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: `<rootDir>/coverage`,
  coveragePathIgnorePatterns: ['node_modules', '.stories.tsx', '.d.ts'],
  passWithNoTests: true,
  silent: false,
  testPathIgnorePatterns: ['node_modules', 'build'],
  transform: {
    '^.+\\.((j|t)sx?|mjs)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    path.resolve(__dirname, './setup.ts'),
  ],
  verbose: false,
  watchman: false,
};

export default configuration;
