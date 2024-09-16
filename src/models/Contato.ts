class Contato {
  id: number
  nome: string
  telefone: string
  email: string
  estaEditando: boolean

  constructor(
    id: number,
    nome: string,
    telefone: string,
    email: string,
    estaEditando: boolean
  ) {
    this.id = id
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.estaEditando = estaEditando
  }
}

export default Contato
