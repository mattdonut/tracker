import React, { FC, useCallback, useState } from 'react'
import Counter from './Counter'
import {Target, randomTarget} from './target'



const Dash: FC = () => {
    const [count, setCount] = useState(0)
    const increase = useCallback(() => {
        setCount(prev => prev + 1)
    }, [setCount])
    return (
        <div>
            <div>

            </div>
            <div>
                <button >Add</button>
            </div>
        </div>
    )
}

export default Dash