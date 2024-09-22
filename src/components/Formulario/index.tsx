import { useNavigate } from "react-router-dom"
import { Titulo } from "../../styles/global"
import { BntCadastrar, Campo, Formulario } from "./styles"
import { useDispatch } from "react-redux"
import { FormEvent, useState } from "react"
import { adicionarContato } from "../../store/reducers/contato"

let idCounter = 4

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')

    const cadastrarNovoContato = (e: FormEvent) => {
        e.preventDefault()
        dispatch(adicionarContato({
            id: idCounter++,
            nome,
            telefone,
            email
        }))

        setNome('');
        setTelefone('');
        setEmail('');
        navigate('/')
    }

    return (
        <>
            <Titulo>Novo Contato:</Titulo>
            <Formulario onSubmit={cadastrarNovoContato}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <Campo
                        type="text"
                        id="name"
                        name="name"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="telefone">Telefone:</label>
                    <Campo
                        type="telefone"
                        id="telefone"
                        name="telefone"
                        value={telefone} required
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Campo
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <BntCadastrar type="submit">Cadastrar</BntCadastrar>
            </Formulario>
        </>
    )
}

export default Form
