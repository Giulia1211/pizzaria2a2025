import { useState, useEffect } from "react"
import axios from "axios"

const Produtos = () => {

    const[dados, setDados] = useState([]);

    const pegarPizzas = () => {

        axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto",
              {withCredentials: true}
    )

        .then((response) => setDados(responde.data))
        .catch((error) => console.log(error))
    }

    useEffect(() => {

        pegarPizzas ();
    }, [])


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