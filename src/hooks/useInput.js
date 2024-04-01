import { useState } from "react"

const useInput = (id, required) => {

    const [ value, setValue ] = useState('')

    const error = required && !value

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return [
        value,
        {
            id,
            onChange: handleChange,
            error,
            helperText: error ? 'Povinné pole' : undefined
        }
    ]

}

export default useInput