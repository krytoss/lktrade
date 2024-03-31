const Form = ({ onSubmit, children }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit && onSubmit()
    }

    return (
        <form onClick={ handleSubmit }>
            { children }
        </form>
    )
}

export default Form