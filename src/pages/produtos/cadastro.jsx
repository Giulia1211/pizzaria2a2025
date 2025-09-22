const CadastroProduto = () => {

    return (

        <div className= "CadastroProduto">

            <h3>Cadastro de Produtos</h3>
            <input type="text" id="id" placeholder="0" disabled/>
            <input type="text" id="Nome" placeholder="Nome do produto"/>
            <input type="text" id="Descrição" placeholder="Descrição"/>
            <input type="text" id="Tipo" placeholder="Tipo de produto"/>
            <input type="text" id="Valor" placeholder="Valor do produto"/>
            <input type="text" id="CategoriaId" placeholder="1"disabled/>☻

            <input type="button" value="Cadastrar"
            onClick={()=> {alert('Cadastrar Produto')}} />

        </div>

    )


}

export default Cadastroproduto