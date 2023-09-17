// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./public/**/*.{html,js}"],
//     theme: {
//       extend: {
//         colors:{
//           primary:'#FF6363',
//           secondary:{
//              100:'#E2E2D5',
//              200:'#888883'
//         }
//         }
//       },
//     },
//     plugins: [],
//   }

/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "/public/**/*.{html,js}",
      "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
      extend: {
        colors:{
          primary:'#FF6363',
          secondary:{
             100:'#E2E2D5',
             200:'#888883'
        }
        }
      },
    },
    plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class"
  };