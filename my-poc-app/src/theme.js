import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    /*  global: () => ({ */
         fonts: {
             heading: 'Poppins',
             body: 'Poppins',
         },
   /*   }), */
 
     colors: {
         transparent: 'transparent',
         black: '#000',
         white: '#fff',
         blue: '#00028A',
         gray: {
             50: '#f7fafc',
             // ...
             900: '#171923',
         },
         // ...
     }
 })
 
 export default theme;