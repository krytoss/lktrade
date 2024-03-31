import Form from "../Form"
import Input from "../Input"
import TextArea from "../TextArea"

const ContactForm = () => {

    return (
        <Form>
            <Input className='mb-2 w-3/6' name='name' placeholder='Vaše meno' />
            <Input className='mb-2 w-3/6' name='mail' placeholder='E-mail' />
            <Input className='mb-2 w-3/6' name='tel' placeholder='Telefónne číslo' />
            <TextArea name='msg' placeholder='Vaša správa' />
        </Form>
    )
}

export default ContactForm