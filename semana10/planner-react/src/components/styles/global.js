import  {createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #0C0C1E;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: lato;
  }

  .App {
    display: flex;
  }

  .menu {
    width: 250px;
    height: 100vh;
    background: #74112F;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    label {
      font-size: 14px;
      font-weight: 300;
      margin: 24px;
    }

    input {
      width: 200px;
      outline: 0;
      border: none;
      height: 32px;
      border-radius: 16px;
      padding: 8px;
      background: #FFF;

    }

    select {
      width: 200px;
      border: none;
      height: 32px;
      border-radius: 16px;
      padding: 8px;
      background:#FFF;
    }

    option {
      outline: 0;
      background: #FFF;

    }

    textarea {
      width: 200px;
      border-radius: 8px;
      resize: none;
      overflow: auto;
      background: #FFF;

    }

    h1 {
      position: fixed;
      bottom: 0;
      font-size: 16px;
      padding-bottom: 16px;
      font-family: lato;
    }

    button {
      border: none;
      border-radius: 8px;
      width: 190px;
      height: 35px;
      background: #0C0C1E;
      color: #FFF;
      margin-top: 25px;
      :hover {
        background: #071330;
      }
    }
  }
  .div-tarefas {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    .box{
      width: 270px;
      height: 300px;
      text-align: center;
      margin: 25px auto;
      background: #FFFBFB;
    }
    .box:hover{
	    filter: brightness(1.2);
    }
    h3{
      margin-top: 10px;
      font-size: 16px;
      color: black;
    }
  }
`

export default GlobalStyle