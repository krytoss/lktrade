import { Button } from "flowbite-react"
import Form from "../form/Form"
import Input from "../form/Input"
import TextArea from "../form/TextArea"
import { useState } from "react"
import useInput from "../../hooks/useInput"

const ContactForm = () => {

    const [ sending, setSending ] = useState(false)
    const [ name, nameProps ] = useInput('name', true)
    const [ mail, mailProps ]  = useInput('mail', true)
    const [ tel, telProps ]  = useInput('tel')
    const [ msg, msgProps ]  = useInput('msg', true)

    const handleSubmit = () => {
        if (!sending) {
            setSending(true)
            console.log('posiela sa')
            console.log(name)
            console.log(mail)
            console.log(tel)
            console.log(msg)
        }
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Input className='mb-2 w-100 lg:w-4/6 xl:w-3/6' placeholder='Vaše meno' {...nameProps} />
            <Input className='mb-2 w-100 lg:w-4/6 xl:w-3/6' name='mail' placeholder='E-mail' {...mailProps} />
            <Input className='mb-2 w-100 lg:w-4/6 xl:w-3/6' name='tel' placeholder='Telefónne číslo' {...telProps} />
            <TextArea name='msg' placeholder='Vaša správa' {...msgProps} />
            <Button type='submit' className='mt-5 block w-full flex justify-center'>
                Odoslať
            </Button>
        </Form>
    )
}

export default ContactForm