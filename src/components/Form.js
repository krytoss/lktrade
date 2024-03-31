const Form = ({ onSubmit, children }) => {

    const handleSubmit = () => {
        onSubmit && onSubmit()
    }

    return (
        <form onClick={ handleSubmit }>
            { children }
        </form>
    )
}

export default Form