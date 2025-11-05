import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",

    typecheck: {
      tsconfig: "./tsconfig.test.json"
    },

    include: ["test/**/*.{test,spec}.ts"],

    exclude: ["**/node_modules/**", "dist", "**/.git/**", ".idea", ".husky"],

    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html", "lcov"],
      include: ["lib/**/*.ts"],
      exclude: ["node_modules", "dist", "**/*.config.*", "**/*.d.ts"]
    }
  }
});
