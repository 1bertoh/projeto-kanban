'use client'
import Title from '@/app/components/title'
import { Button, Input, Select, SelectItem } from '@heroui/react'
import React from 'react'

const Page = () => {
    const animals = [
        { key: "gerente", label: "Gerente" },
        { key: "vendedor", label: "Vendedor" },
        { key: "financeiro", label: "Financeiro" },
    ];

    return (
        <div>
            <Title title='Cadastro de usuário' />
            <div>
                <div className='flex justify-evenly'>
                    <Input
                        className='md:w-4/12'
                        label="Nome"
                        labelPlacement="outside"
                        placeholder="you@example.com"
                        type="email"
                    />
                    <Input
                        className='md:w-4/12'
                        label="Email"
                        labelPlacement="outside"
                        placeholder="you@example.com"
                        type="email"
                    />
                </div>
                <div className='flex md:mt-8 justify-evenly'>
                    <Input
                        className='md:w-4/12'
                        label="Senha"
                        labelPlacement="outside"
                        placeholder="you@example.com"
                        type="password"
                    />
                    <div className="md:w-4/12">
                        <Select
                            items={animals}
                            label="Grupo de usuário"
                            labelPlacement="outside"
                            placeholder="Selecione um tipo"
                        >
                            {(animal) => <SelectItem>{animal.label}</SelectItem>}
                        </Select>
                        <a href='/usuarios/grupos' className='text-small text-zinc-400 underline'>Cadastrar grupo</a>
                    </div>
                </div>
                <Button size='sm' color='primary'>Cadastrar</Button>
            </div>
        </div>
    )
}

export default Page