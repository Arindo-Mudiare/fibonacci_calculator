import React from 'react'

export default function Todo() {
    const [ todos, setTodos ] = React.useState([])
    const [ input, setInput ] = React.useState('')

    return (
        <div>
            <input
                type="text"
                value={input}
                placeholder='New Todo'
                onChange={(e) => setInput(e.target.value)}
                />
        </div>
    )
}
