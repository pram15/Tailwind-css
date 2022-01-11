module.exports = {
  content: ["./public/index.{html,js}"],
  theme: {
    extend: {
      colors: {
        ungu: "#5267DF",
        merah: "#FA5959",
        biru: "#242A25",
        abu_abu: "#9194A2",
        putih: "#f7f7f7",
      },

      fontFamily: {
        poppins: ["Poppins"],
      },

      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2x1": "1124px",
        },
      },
    },
  },
  plugins: [],
};
