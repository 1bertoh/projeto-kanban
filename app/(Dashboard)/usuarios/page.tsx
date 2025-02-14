'use client'
import React from 'react'
import Title from '../../components/title'
import { Search } from 'lucide-react'
import { Button, Card, CardBody, Input, Tab, Tabs } from '@heroui/react'

const Page = () => {
    return (
        <div>
            <Title title='Usuários' />
            <div>
                <div className='flex justify-between items-center'>
                    <Input
                        className='max-w-[300px]'
                        endContent={
                            <Search className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        labelPlacement="outside"
                        type="email"
                    />
                    <span>
                        3 Resultados
                    </span>
                </div>
                <div className='pt-8 pb-4'>
                    <a href="/usuarios/cadastrar">
                        <Button color='primary' size='sm'>Cadastrar usuário</Button>
                    </a>
                </div>
                <TabsComp />
            </div>
        </div>
    )
}

const TabsComp = () => {

    const tabs = [
        {
            id: '1',
            label: 'Ativo',
            content: <ListaUsuarios />
        },
        {
            id: '2',
            label: 'Inativo',
            content: <p>Nenhum usuário encontrado</p>
        }
    ]

    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options" items={tabs} className='mx-auto'>
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <div>
                            {item.content}
                        </div>
                    </Tab>
                )}
            </Tabs>
        </div>
    )
}

const ListaUsuarios = () => {
    const usuarios = [
        {
            nome: 'Ana Vitória',
            profissao: 'Gerente',
            email: 'Ana@hotmail.com'
        },
        {
            nome: 'Billie Jeans',
            profissao: 'Vendedor',
            email: 'Billie@hotmail.com'
        },
        {
            nome: 'João P.',
            profissao: 'Vendedor',
            email: 'JP@hotmail.com'
        },
    ]

    return (
        <div>
            {
                usuarios.map((u, index) => (
                    <Card key={index} className='border border-zinc-400 my-5 bg-transparent'>
                        <CardBody>
                            <div className='flex gap-2'>
                                <span className='text-lg font-bold'>{u.nome}</span>
                                <span className='text-zinc-400'>{u.profissao}</span>
                            </div>
                            <span className='text-sm text-zinc-400'>{u.email}</span>
                        </CardBody>
                    </Card>
                ))
            }
        </div>
    )
}

export default Page