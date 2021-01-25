import React, { FC, useState, useCallback } from 'react'
import { Target } from './target'
import './Counter.css'

interface CounterProps {
    target: Target
}

const Counter: FC<CounterProps> = ({ target }) => {
    const [count, setCount] = useState(0)
    const increase = useCallback(count => {
        if (count < target.value) {
            setCount(count + 1)
        }
    }, [target, setCount])
    return (
        <div className="counter" onClick={() => increase(count)}>
            {count} / {target.value}

        </div>
    )
}

export default Counter