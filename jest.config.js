export const collectCoverageFrom = [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
];
export const testPathIgnorePatterns = ['/node_modules/', '/.next/'];
export const transform = {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/tests/__helpers__/cssTransform.js',
};
export const transformIgnorePatterns = [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
];
export const moduleNameMapper = {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
};
