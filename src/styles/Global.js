import { createGlobalStyle } from "styled-components";

const headerHeight = "3.5rem";

/*========== Colors ==========*/
const colors = {
  azul: "hsl(203, 71%, 60%)",
  roxo: "hsl(277, 56%, 68%)",
  textColor: "hsl(203, 8%, 98%)",
  textColorCinza: "hsl(203, 8%, 80%)",
  bodyColor: "hsl(259, 20%, 18%)",
};

const font = "Oxanium";

const fontSize = {
  biggest: "2.25rem",
  h2: "1.25rem",
  normal: ".938rem",
  smaller: ".75rem",
};

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: ${font};
        font-size: ${fontSize.normal};
        background-color: ${colors.bodyColor};
        color: ${colors.textColor};
        overflow-x: hidden;
       
    }

    ul {
  list-style: none;
}

a {
  text-decoration: none;
}
    
img {
  max-width: 100%;
  height: auto;
}

`;
export default GlobalStyle;
