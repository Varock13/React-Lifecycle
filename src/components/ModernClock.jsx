import { useEffect, useRef, useState } from "react";

const Clock = function () {
    const [date, setDate] = useState(new Date());
    const timerId = useRef();
    const employees = [];

    //sin pámetro -> Siempre se ejecuta
    //[] -< renderiza solo la primera vez
    //[a, b, c] -> Vigila y reacciona a los cambios
    //return -> Se ejecuta en el dismount
    useEffect( ()=> {
        console.log('componentDidMount');
        timerId.current = setInterval( ()=> tick(), 1000 );
        return() => {
            console.log('componentWillUnmount');
            clearInterval(timerId.current);
        }
    }, []);

    useEffect(() => console.log('componentDidUpdate'));

    const tick = () => {
        console.log('tick');
        setDate(new Date());
    }

    return(
        <div>
            <h2>Hello, World</h2>
            <h2>It's {date.toLocaleTimeString()}</h2>
        </div>
    );
};

export default Clock;