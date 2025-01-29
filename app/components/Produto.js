function Produto( attr ) {
    return ( 
    
        <div className="border-solid border w-1/6 bg-zinc-100 p-5">
            <div className="text-center">
                <img src="https://placehold.co/200"/>
            </div>

            <h2 className="text-lime-800"> {attr.nome} </h2>
            <p> {attr.avaliacao} </p>
            <p> R$ {attr.preco} </p>
            <button className="border-solid border-none bg-blue-700 text-white p-3"> {attr.botao}</button>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
     );
}

export default Produto;