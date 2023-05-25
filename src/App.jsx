import './components/MeuComponent'
import MeuComponente from './components/MeuComponent'
import './components/MeuBotao'
import MeuBotao from './components/MeuBotao'

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
    </div>
  )
}

export default App
