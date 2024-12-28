module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",  // Asegúrate de que tanto los archivos JS como JSX sean transformados
  },
  transformIgnorePatterns: [
      "/node_modules/(?!query-string)/", // Esto garantiza que `query-string` se transforme
  ],
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.js'], // Archivo de configuración global para Jest
};
