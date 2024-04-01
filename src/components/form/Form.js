const Form = ({ onSubmit, children }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit && onSubmit()
    }

    return (
        <form onSubmit={ handleSubmit }>
            { children }
        </form>
    )
}

export default Form