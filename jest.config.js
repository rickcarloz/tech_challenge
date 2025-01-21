module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1', // Mapeamento de alias
    },
    transform: {
      '^.+\\.(t|j)sx?$': 'ts-jest', // Usar ts-jest para arquivos TypeScript
    },
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json', // Referenciar seu tsconfig.json
      },
    },
  };
  