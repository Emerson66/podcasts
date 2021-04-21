import {useState} from 'react';
export default function Button(props){
    
    const [counter, setCounter] = useState(1);

    //A função useState retorna pra gente duas informações [estado, altera estado],
    //e é por isso que em volta do counter foi colocado um array
    //para desestruturar
    function increment(){
        setCounter(counter + 1);
        console.log(counter);
    };

    return(
        <>
            <span>{counter}</span>
            <button onClick={increment}>{props.children}</button>
            <br/>
        </>
    )
}