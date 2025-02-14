'use client'
import React from 'react'
import { Button, getKeyValue, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from '@heroui/react'
import { Search } from 'lucide-react'
import Title from '@/app/components/title'

const Page = () => {
    const rows = [
        {
            key: "1",
            name: "Tony Reichert",
            origem: "Fcebook",
            cnpj: "11111.111-0001.01",
            setor: "Vendas",
            responsavel: <User
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
                name="Ana"
            />,
            produtos: <a href="#" className='underline'>Ver produtos</a>
        },
        {
            key: "2",
            name: "Zoey Lang",
            origem: "Facebook",
            cnpj: "11111.111-0001.02",
            setor: "Vendas",
            responsavel: <User
            avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            name="Mary"
            />,
            produtos: <a href="#" className='underline'>Ver produtos</a>
        },
        {
            key: "3",
            name: "Jane Fisher",
            origem: "Google",
            cnpj: "11111.111-0001.03",
            setor: "Financeiro",
            responsavel: <User
            avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            name="Billie"
            />,
            produtos: <a href="#" className='underline'>Ver produtos</a>
        },
        {
            key: "4",
            name: "William Howard",
            origem: "Google",
            cnpj: "11111.111-0001.04",
            setor: "Financeiro",
            responsavel: <User
            avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            name="Gaga"
            />,
            produtos: <a href="#" className='underline'>Ver produtos</a>
        },
    ];

    const columns = [
        {
            key: "name",
            label: "Nome",
        },
        {
            key: "origem",
            label: "Origem",
        },
        {
            key: "cnpj",
            label: "CNPJ",
        },
        {
            key: "setor",
            label: "Setor",
        },
        {
            key: "responsavel",
            label: "Responsavel",
        },
        {
            key: "produtos",
            label: "Produtos",
        },
    ];
    return (
        <div>
            <Title title='Clientes' />
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
                <div className='mt-8'>
                    <a href="/clientes/cadastro">
                        <Button size='sm' color='primary'>Cadastrar cliente</Button>
                    </a>
                </div>
            </div>
            <div className='mt-4'>
                <Table
                aria-label="Example table with dynamic content"
                classNames={{
                    th: "text-white",
                    tbody: "text-zinc-400"
                }}
                >
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default Page