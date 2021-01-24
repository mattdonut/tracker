import React, {FC, useState} from 'react'
import {Target} from './target'
import './Counter.css'
interface CounterProps {
    target: Target
}

const Counter: FC<CounterProps> = ({target}) => {
    const [count, setCount] = useState(0)
    return (
        <div className="counter" onClick={() => setCount(count + 1)}>
            {count} / {target.value}
        </div>
    )
}

export default Counter