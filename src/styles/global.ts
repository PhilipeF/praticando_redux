import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;       
        list-style: none;
    }
`

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
`

export const Titulo = styled.h1`
    margin-bottom: 16px;
`

export const Button = styled.button`
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: 700;
    border: none;
    font-size: 12px;
    background: #2f3640;
    margin-right: 8px;
    color: #fff;
    cursor: pointer;
`

export default GlobalStyle