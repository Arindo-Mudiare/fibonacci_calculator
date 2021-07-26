import React, { Fragment } from 'react'
import '../custom.css'


export default function Fibonacci() {
    const [fibCount, setFibCount ] = React.useState(1)
    const [primeCount, setPrimeCount ] = React.useState(1)

    const handleReset = () => {
        setFibCount(1)
        setPrimeCount(1)
    }

    const add10 = () => {
        setFibCount((c) => c + 10)
        setPrimeCount((c) => c + 10)
    }

    return (
        <Fragment>
            <button onClick={add10} className="btn">Add 10</button>
            <button onClick={handleReset} className="btn">Reset</button>
        </Fragment>
    )
}
