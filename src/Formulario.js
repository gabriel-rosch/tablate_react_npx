import { useState } from "react";

function Formulario() {
    const [nome, setNome] = useState('Gabriel');
    const [idade, setIdade] = useState(0);

     // Não aceitar nomes em branco
    // Não cadastrar menores de idades
   
    //---------------------
    function cadastrar() {
    
        const regex = /[0-9]/;

        if(!nome) {
            alert('Nome não pode estar em branco')
        } else if(regex.test(nome)) {
            alert('Nome contem numeros')
        } else if(idade < 18) {
            alert('Usuario menor de idade')
        } else {
            alert('Usuário cadastrado com sucesso')
        }
    }

    //----------------------
    return (
        <div>
            <h1>Formulário</h1>
            <h1>{nome}</h1>

            <input onChange={(e)=>{setNome(e.target.value)}}
             placeholder="Nome" value={nome} />

            <input onChange={(e)=>{setIdade(e.target.value)}}
             placeholder="Idade" value={idade} type="number"/>

            <button onClick={cadastrar}>Cadastrar</button>
        </div>
    );
  
  
}

export default Formulario;