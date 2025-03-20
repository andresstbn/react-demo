"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const clickHandler = () => {
        setCounter(counter + 1)

    }

    return (
        <div className="flex gap-4">

            <Button onClick={clickHandler}>
                Incrementar 
            </Button>
            <div className="bg-green-100 p-4 m-4 rounded-xl">
                {counter}
            </div>
            <Button onClick={() => setCounter(0)}>
                Reiniciar
            </Button>
        </div>
    )
}