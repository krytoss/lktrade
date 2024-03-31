import { Button } from "flowbite-react"
import Form from "../Form"
import Input from "../Input"
import TextArea from "../TextArea"
import { useState } from "react"

const ContactForm = () => {

    const [ sending, setSending ] = useState(false)

    const handleSubmit = () => {
        if (!sending) {
            setSending(true)
            console.log('posiela sa')
        }
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Input className='mb-2 w-100 lg:w-4/6 xl:w-3/6' name='name' placeholder='Vaše meno' />
            <Input className='mb-2 w-100 lg:w-4/6 xl:w-3/6' name='mail' placeholder='E-mail' />
            <Input className='mb-2 w-100 lg:w-4/6 xl:w-3/6' name='tel' placeholder='Telefónne číslo' />
            <TextArea name='msg' placeholder='Vaša správa' />
            <Button type='submit' className='mt-5 block w-full flex justify-center'>
                Odoslať
            </Button>
        </Form>
    )
}

export default ContactForm