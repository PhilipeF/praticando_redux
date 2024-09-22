import styled from "styled-components";
import { Button } from "../../styles/global";
import variaveis from "../../styles/variaveis";

export const ListaDeContatos = styled.div`
    padding: 32px;
    background: #fcfcfc;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 0px 0px 16px 16px;
    margin-bottom: 24px;

    div {
        margin-bottom: 10px;
    }
`

export const EditarContato = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        font-size: 12px;
        color: red;
    }

    input {
        padding: 4px;
    }
`

export const ButtonSave = styled(Button)`
    background-color: ${variaveis.green};
`

export const ButtonExcluir = styled(Button)`
    background-color: ${variaveis.red};
`