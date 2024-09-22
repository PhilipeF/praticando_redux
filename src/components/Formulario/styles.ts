import styled from "styled-components";

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
`

export const Campo = styled.input`
  border-radius: 8px;
  border: 1px solid #666;
  color: #666;
  font-weight: 400;
  font-size: 14px;
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
`

export const BntCadastrar = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  border: none;
  font-size: 14px;
  background: #44BD32;
  margin-right: 8px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #3d9941;
  }
`
