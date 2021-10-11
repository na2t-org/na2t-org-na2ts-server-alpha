const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },

  plugins: [
    require("tailwind-nord"),
  ],

  corePlugins: {
    fontFamily: false,
  },
};

module.exports = config;