const TextArea = ({ name, placeholder, onChange }) => {

    const handleChange = (event) => {
        onChange(event)
    }

    return (
        <textarea
            rows={4}
            name={ name }
            placeholder={ placeholder }
            className='text-sm text-white placeholder-gray-400
                focus:ring-blue-500 block w-full p-2.5 bg-gray-700 bg-opacity-20
                border border-gray-600 focus:border-blue-500 rounded-lg'
            onChange={ handleChange }></textarea>
    )
}

export default TextArea