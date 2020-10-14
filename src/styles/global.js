import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    .wrap{
        background: #2D46B9;
        flex: 1;
    }

    .container-fluid{
        padding-right:0;
        padding-left:0;
    }

    #table-music{
        background: #1f1f1f;
    }

    

`;