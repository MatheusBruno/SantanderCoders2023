import MeuComponente from './components/MeuComponent'
import MeuBotao from './components/MeuBotao'
import MeuContador from './components/MeuContador'

function App() {
  return (
    <div>
      <h1>Hello World!!!</h1>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuComponente></MeuComponente>
      <MeuBotao conteudo="Click Aqui"></MeuBotao>
      <MeuBotao conteudo="Botão 1"></MeuBotao>
      <MeuBotao conteudo="Botão 2"></MeuBotao>
      <MeuContador></MeuContador>
    </div>
  )
}

export default App
