import CardEditaCadastra from '../../components/CardEditaCadastra'

const NovoContato = () => (
  <div className="body">
    <div className="container-body">
      <CardEditaCadastra
        nome=""
        email=""
        telefone=""
        estaEditando={true}
        id={0}
      />
    </div>
  </div>
)

export default NovoContato
