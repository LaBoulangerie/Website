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
                header: "url('./assets/images/main-bg.png')",
                map: "url('./assets/images/map-bg.svg')",
                gaiartos_map: 'url("./assets/images/gaiartos-map.png")',
            },
            colors: {
                "purple-navy": "#4E598C",
                "lavender-blue": "#E4D9FF",
                "gold-crayola": "#F9C784",
                "yellow-orange": "#FCAF58",
                "mango-tango": "#FF8C42",
            },
        },
    },
    plugins: [],
};
