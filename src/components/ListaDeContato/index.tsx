import { RootState } from "../../store";
import { useDispatch, useSelector } from 'react-redux';
import { editarContato, removerContato } from '../../store/reducers/contato'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Titulo } from "../../styles/global";
import * as S from "./styles"

const ListaDeContatos = () => {
    const contatos = useSelector((state: RootState) => state.constosList)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [editarContatoId, setEditarContatoId] = useState<number | null>(null)
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (editarContatoId !== null) {
            const contato = contatos.find(c => c.id === editarContatoId);
            if (contato) {
                setNome('')
                setTelefone('')
                setEmail('')
            }
        }
    }, [editarContatoId, contatos]);

    const cancelarEdicao = () => {
        setEditarContatoId(null)
        setNome('')
        setTelefone('')
        setEmail('')
    }

    const editandoContato = () => {
        if (editarContatoId) {
            dispatch(editarContato({
                id: editarContatoId,
                nome,
                telefone,
                email,
            }));
            cancelarEdicao();
        }
    };

    return (
        <>
            <Titulo>Lista de Contatos:</Titulo>
            <ul style={{ marginBottom: '64px' }}>
                {contatos.map(contato => (
                    <S.ListaDeContatos key={contato.id} >
                        <li>
                            <div>
                                <strong>Nome:</strong> {contato.nome} <br />
                            </div>
                            <div>
                                <strong>Telefone:</strong> {contato.telefone} <br />
                            </div>
                            <div>
                                <strong>E-mail:</strong> {contato.email}
                            </div>
                            <div>
                                {editarContatoId === contato.id ? (
                                    <S.EditarContato>
                                        <label htmlFor="">Editando o nome: </label>
                                        <input
                                            value={nome}
                                            id="nome"
                                            name="nome"
                                            onChange={(e) => setNome(e.target.value)}
                                            placeholder="Nome"
                                        />
                                        <label htmlFor="">Editando telefone: </label>
                                        <input
                                            value={telefone}
                                            id="telefone"
                                            name="telefone"
                                            onChange={(e) => setTelefone(e.target.value)}
                                            placeholder="Telefone"
                                        />
                                        <label htmlFor="">Editando o E-mail:</label>
                                        <input
                                            value={email}
                                            id="email"
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="E-mail"
                                        />
                                        <S.ButtonSave onClick={editandoContato}>Salvar</S.ButtonSave>
                                        <S.ButtonExcluir onClick={cancelarEdicao}>Cancelar</S.ButtonExcluir>
                                    </S.EditarContato>
                                ) : (
                                    <>
                                        <Button onClick={() => setEditarContatoId(contato.id)}>Editar</Button>
                                        <S.ButtonExcluir onClick={() => dispatch(removerContato(contato.id))}>
                                            Remover
                                        </S.ButtonExcluir>
                                    </>
                                )}
                            </div>
                        </li>
                    </S.ListaDeContatos>
                ))}
                <S.ButtonSave onClick={() => navigate('/form')}>Adicionar</S.ButtonSave>
            </ul>
        </>
    );
};

export default ListaDeContatos