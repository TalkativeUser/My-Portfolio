/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         boxShadow: {
        navShadow:'25px 25px 75px rgba(255, 255, 255, 0.25), 10px 10px 70px rgba(0, 0, 0, 0.25), inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(255, 255, 255, 0.2), inset -5px -5px 15px rgba(0, 0, 0, 0.75)',
        linkOfNav:" rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
        pointActivNav:`  0 0 10px #00ff80, 0 0 20px #00ff80, 0 0 30px #00ff80, 0 0 40px #00ff80, 0 0 50px #00ff80;`
      },
    colors: {
        "main-color": '#12f7ff', // 👈 your custom color name
      },
        transformOrigin: {
        'bottom': 'bottom',
        'bottom-left': 'bottom left',
        'bottom-right': 'bottom right',
        
      }, 
      screens:{
        'xs':'480px'
      }
      

    },
  },
  plugins: [],
}
