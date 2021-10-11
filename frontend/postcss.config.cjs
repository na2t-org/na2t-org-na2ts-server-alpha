const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const fontMagician = require("postcss-font-magician");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	plugins: [
        fontMagician({
            variants: {
              'Quicksand':{}
            }
        }),
        //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
        tailwindcss(),
        //But others, like autoprefixer, need to run after,
        autoprefixer(),
        !dev && cssnano({
			preset: "default",
		})
    ],
};

module.exports = config;