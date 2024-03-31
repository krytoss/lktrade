import { Card, Button } from "flowbite-react"

const InfoCard = ({ title, children, button, className }) => {
    
    return (
        <Card className={
            "border-none bg-gray-500 bg-opacity-10" + (className ? (' ' + className) : '')
        }>
            <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                { title }
            </h5>
            <div className="font-normal text-white">
                { children }
            </div>
            {
                button ?
                    <Button href={ button.href }>
                        { button.text }
                    </Button>
                    : ''
            }
        </Card>
    )
}

export default InfoCard