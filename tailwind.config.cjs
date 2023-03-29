/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            miner: "Minercraftory",
            alagard: "Alagard",
            poppins: "Poppins",
        },
        extend: {
            backgroundImage: {
                header: "url('./assets/images/main-bg.webp')",
                map: "url('./assets/images/map-bg.svg')",
                baguette: "url('./assets/images/baguette.svg')",
                heart: "url('./assets/images/heart.svg')",
                "gaiartos-map": 'url("./assets/images/gaiartos-map.webp")',
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            colors: {
                "purple-navy": "#4E598C",
                "lavender-blue": "#E4D9FF",
                "gold-crayola": "#F9C784",
                "yellow-orange": "#FCAF58",
                "mango-tango": "#FF8C42",
                "tag-owner-1": "#FF8C42",
                "tag-owner-2": "#FFBB61",
                "tag-dev-1": "#1ABC9C",
                "tag-dev-2": "#2ECC71",
                "tag-mod-1": "#9E4395",
                "tag-mod-2": "#CA54FF",
                "tag-builder-1": "#F1C40F",
                "tag-builder-2": "#FFBB61",
                "tag-scenar-1": "#13A1DE",
                "tag-scenar-2": "#2C29D1",
                "tag-contributor-1": "#007E51",
                "tag-contributor-2": "#01A7BD",
            },
        },
    },
    plugins: [],
};
