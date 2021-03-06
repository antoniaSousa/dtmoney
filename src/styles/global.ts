import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;
    --test-title: #363f5f;
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
@media (max-width:1080px){
    font-size:93.75%; //15px
}
@media (max-width: 720px){
    font-size: 87.5%;  //14px
}
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, :-ms-input-placeholder, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6{
    font-size: 600;
}
button{
    cursor: pointer;
}
`;