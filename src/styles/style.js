import styled from "styled-components";

/*=============== VARIABLES ===============*/
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

export const Header = styled.header`
  width: 100%;
  height: ${headerHeight};
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  nav {
    width: 100%;
    max-width: 1024px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        background: linear-gradient(to right, ${colors.azul}, ${colors.roxo});
        display: inline-block;

        /* Clip the background upto
        the text  */
        -webkit-background-clip: text;
        background-clip: text;

        /* Set the color of the text
        to transparent  */
        color: transparent;
      }
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

export const ContentPrincipal = styled.div`
  width: 100%;
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  align-items: center;
  padding-top: 1rem;

  .cicle1,
  .cicle2,
  .cicle3 {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
  }
  .cicle1 {
    width: 150px;
    height: 150px;
    background-color: ${colors.azul};
    top: -2.5rem;
    left: -1.5rem;
  }
  .cicle2,
  .cicle3 {
    width: 250px;
    height: 250px;
  }
  .cicle2 {
    background-color: ${colors.azul};
    top: 16rem;
    right: -6.5rem;
  }
  .cicle3 {
    background-color: ${colors.roxo};
    left: -3.5rem;
    bottom: -4rem;
  }

  .fundoImg {
    position: absolute;
    top: 0;
    left: 0;
    height: 124%;
    width: 100%;

    object-fit: cover;
    mix-blend-mode: soft-light;
    opacity: 0.3;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      font-size: 3rem;
      strong {
        background: linear-gradient(to right, ${colors.azul}, ${colors.roxo});
        display: inline-block;

        /* Clip the background upto
        the text  */
        -webkit-background-clip: text;
        background-clip: text;

        /* Set the color of the text
        to transparent  */
        color: transparent;
      }
    }
    p {
      margin-bottom: 2rem;
      font-weight: 100;
    }
    button {
      text-decoration: none;
      position: relative;
      border: none;
      font-size: 14px;
      font-family: inherit;
      color: #fff;
      width: 9em;
      height: 3em;
      line-height: 2em;
      text-align: center;
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      background-size: 300%;
      border-radius: 10px;
      z-index: 1;

      :hover {
        animation: ani 8s linear infinite;
        border: none;
      }

      @keyframes ani {
        0% {
          background-position: 0%;
        }

        100% {
          background-position: 400%;
        }
      }
      :before {
        content: "";
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        z-index: -1;
        background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        background-size: 400%;
        border-radius: 15px;
        transition: 1s;
      }

      :hover::before {
        filter: blur(20px);
      }

      :active {
        background: linear-gradient(32deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
      }
    }
  }

  .image {
    position: relative;

    .informacoes {
      position: absolute;
      right: 0;
      top: 0;
    }

    img {
      width: 80rem;
      transform: translatey(0px);
      animation: float 5s ease-in-out infinite;

      @keyframes float {
        0% {
          transform: translatey(0px);
        }
        50% {
          transform: translatey(-30px);
        }
        100% {
          transform: translatey(0px);
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;

    .text {
      margin-left: 3rem;
      h1 {
        font-size: 2.5rem;
      }
    }

    .image {
      width: 100%;
      margin: 0 auto;
      .informacoes {
        display: none;
      }
      img {
        margin-top: 2rem;
      }
    }
  }
`;

export const ContentSecundario = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;

  .preco {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: ${fontSize.h2};
    }
  }

  .tempo {
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
    }
    .infos {
      display: flex;
      align-items: center;
      gap: 1rem;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`;
