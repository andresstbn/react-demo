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
            {counter <= 5 &&
                <Button onClick={clickHandler}>
                    Incrementar
                </Button>
            }
            {counter <= 5 ?
                <div className="bg-blue-100 p-4 m-4 rounded-xl">
                    {counter}
                </div>
                :
                <div className="bg-red-100 p-4 m-4 rounded-xl">
                    Desbordaste el contador
                </div>
            }
            <Button onClick={() => setCounter(0)} highlight={counter > 5}>
                Reiniciar
            </Button>
        </div>
    )
}