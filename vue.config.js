const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: [
    "axios", // Transpile Axios
    // Add other dependencies that need to be transpiled if necessary
  ],
});
