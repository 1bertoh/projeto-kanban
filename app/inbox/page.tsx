import React from 'react'
import Card from '../components/card'
import { Inbox } from 'lucide-react'

const Page = () => {
    return (
        <Card title='Caixa de Entrada'>
            <div className='flex flex-col gap-3 items-center h-full justify-center text-zinc-500'>
                <Inbox size={75} />
                <p>Não há mensagens para você </p>
            </div>
        </Card>
    )
}

export default Page