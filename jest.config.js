module.exports = {
    rootDir: './src',
    // moduleFileExtensions: ['js', 'json', 'ts'],
    // testRegex: '.*\\.spec\\.ts$',
    // transform: {
    //     '^.+\\.(t|j)s$': 'ts-jest',
    // },
    testMatch: ['**/test/**/*.+(ts)', '**/?(*.)+(spec|test).+(ts)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    collectCoverageFrom: ['**/*.(t|j)s'],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
};
