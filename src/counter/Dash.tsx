import React, { FC, useCallback, useState } from 'react'
import Counter from './Counter'
import { Target, randomTarget } from './target'
import './Dash.css'


const Dash: FC = () => {
    const [goals, setGoals] = useState<Target[]>([])
    const addNew = useCallback(() => {
        setGoals(prev => prev.concat([randomTarget()]))
    }, [setGoals])
    return (
        <div>
            <div className="target-dash">
                {goals.map(goal => <Counter target={goal} />)}
            </div>
            <div>
                <button onClick={addNew}>Add</button>
            </div>
        </div>
    )
}

export default Dash