"use client";

import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0)
    
    const clickHandler = () => {
        setCounter(counter + 1)
        
    }

    return (
        <div className="flex gap-4">
            <button onClick={clickHandler} className="bg-purple-300 p-8 rounded-xl hover:bg-purple-400">
                Contador {counter}
            </button>
            <button onClick={() => setCounter(0)} className="bg-purple-300 p-8 rounded-xl hover:bg-purple-400">
                Reiniciar
            </button>
        </div>
    )
}