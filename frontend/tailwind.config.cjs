module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#CBDE7F",
                black: "#00152A",
                white: "#F4F4F4",
                gray: "#929292",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
                serif: ["Montserrat", "sans-serif"],
                satisfy: ["Satisfy", "cursive"],
                pacifico: ["Pacifico", "cursive"],
            },
        },
        screens: {
            xs: "425px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
};
