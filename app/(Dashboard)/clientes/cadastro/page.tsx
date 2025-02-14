'use client'
import Title from '@/app/components/title'
import { Button, Input } from '@heroui/react'
import React from 'react'

const Page = () => {

    return (
        <div>
            <Title title='Cadastro de cliente' />
            <div>
                <div className='flex justify-evenly'>
                    <Input
                        className='md:w-4/12'
                        label="CNPJ"
                        labelPlacement="outside"
                        placeholder=""
                        type="email"
                    />
                    <Input
                        className='md:w-4/12'
                        label="Nome"
                        labelPlacement="outside"
                        placeholder=""
                        type="email"
                    />
                </div>
                <div className='flex md:mt-8 justify-evenly'>
                    <Input
                        className='md:w-4/12'
                        label="Razão Social"
                        labelPlacement="outside"
                        placeholder=""
                        type="text"
                    />
                    <Input
                        className='md:w-4/12'
                        label="Endereço"
                        labelPlacement="outside"
                        placeholder=""
                        type="text"
                    />
                </div>
                <Button size='sm' color='primary'>Cadastrar</Button>
            </div>
        </div>
    )
}

export default Page