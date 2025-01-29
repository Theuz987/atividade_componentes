import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function Home() {
  return (

    <div>
        
        <Menu/>

            <h1>Enviando para o Github</h1>
            <p>Atividade em andamento...</p>
            <p>Testando uma nova versão</p>
        <hr/>
        <br/>

        <h2>Produtox</h2>
    
        <div className="flex justify-around">
            <Produto nome="Coxinha de frango" preco="4,20" avaliacao="⭐⭐⭐⭐⭐" botao="Comprar"/>
            <Produto nome="Bolinha de queijo" preco="5,30" avaliacao="⭐⭐⭐⭐" botao="Encomendar"/>
            <Produto nome="Enroladinho de salsicha" preco="5,00" avaliacao="⭐⭐" botao="Comprar"/>
            <Produto nome="Bolinha de frango c/ catupiry" preco="4,50" avaliacao="⭐⭐⭐" botao="Encomendar"/>
            <Produto nome= "Pastel de chocolate" preco="5,70" avaliacao="⭐" botao="Comprar"/>
        </div>
    </div>
    );
}