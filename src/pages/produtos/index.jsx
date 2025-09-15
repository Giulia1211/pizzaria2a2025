const Produtos = () => {

    //Objeto de produtos na lista 
    const pizzas = [

    'Pizza de mussarela',
    'Pizza de Romeu e Julieta',
    'Pizza de Brocolis com queijo',
    'Pizza de Calabresa',
    'Piiza de Chocolate com confeti'

    ]

    //Interação da lista de pizzas
    const listaPizzas =pizzas.map(pizza => <li>{pizza}</li>)
    
    return (

        <div>

            

            <h3>Listagem de Produtos</h3>

           <ul> 
            {listaPizzas}
           </ul>

        </div>
    )

}

export default Produtos