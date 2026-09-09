module.exports = {
  roots: ["<rootDir>/src"],

  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$":
      "<rootDir>/src/core/utils/test/__mocks__/styleMock.ts",
    "\\.svg$": "<rootDir>/src/core/utils/test/__mocks__/svgrMock.ts"
  },

  testEnvironment: "jsdom",

  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}]
  },

  // Automatically clear mock calls and instances before every test.
  clearMocks: true
};
