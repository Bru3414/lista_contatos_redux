import { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  .body {
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(135deg, ${variaveis.rosaFundo}, ${variaveis.roxoFundo});
    align-content: center;

    .container-body {
      width: 40%;
      height: 80%;
      background-color: ${variaveis.brancoFundo};
      margin: 0 auto;
      padding: 20px 0;
      border-radius: 16px;
      overflow-y: scroll;

      @media (max-width: 1024px) {
        width: 80%;
      }
      @media (max-width: 640px) {
        width: 90%;
      }
        }
  }

  .container {
    margin: 0 auto;
    width: 80%;
  }

  body {
    ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${variaveis.amarelo};
    border-radius: 16px;
    cursor: pointer;
  }

  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: ${variaveis.rosa};
    border-radius: 16px;
    border: 3px solid ${variaveis.amarelo};
  }
  }

`
export default EstiloGlobal
