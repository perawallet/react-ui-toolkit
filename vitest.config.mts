import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    globals: true,
    clearMocks: true,
    setupFiles: ["src/core/utils/test/setupTests.ts"],
    alias: [
      {find: /^.+\.svg$/, replacement: "/src/core/utils/test/__mocks__/svgrMock.ts"}
    ]
  }
});
