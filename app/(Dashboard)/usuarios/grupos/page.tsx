'use client'
import Title from '@/app/components/title'
import { Button, Checkbox, getKeyValue, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react'
import { Search } from 'lucide-react'
import React from 'react'

const Page = () => {
    const rows = [
        {
            key: "1",
            name: "Tony Reichert",
            addEdit: <Checkbox color='success' defaultSelected/>,
            delete: <Checkbox color='success' defaultSelected/>,
            read: <Checkbox color='success' defaultSelected/>,
            export: <Checkbox color='success' defaultSelected/>,
        },
        {
            key: "2",
            name: "Zoey Lang",
            addEdit: <Checkbox color='success' defaultSelected/>,
            delete: <Checkbox color='success'/>,
            read: <Checkbox color='success'/>,
            export: <Checkbox color='success' defaultSelected/>,
        },
        {
            key: "3",
            name: "Jane Fisher",
            addEdit: <Checkbox color='success' defaultSelected/>,
            delete: <Checkbox color='success' defaultSelected/>,
            read: <Checkbox color='success'/>,
            export: <Checkbox color='success' defaultSelected/>,
        },
        {
            key: "4",
            name: "William Howard",
            addEdit: <Checkbox color='success'/>,
            delete: <Checkbox color='success' />,
            read: <Checkbox color='success' />,
            export: <Checkbox color='success'/>,
        },
    ];

    const columns = [
        {
            key: "name",
            label: "Nome",
        },
        {
            key: "addEdit",
            label: "Adicionar e Editar",
        },
        {
            key: "delete",
            label: "Excluir",
        },
        {
            key: "read",
            label: "Visualizar",
        },
        {
            key: "export",
            label: "Exportar",
        },
    ];

    return (
        <div>
            <Title title='Grupos' />
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
                <div className='mt-6'>
                    <div>
                        <Button color='primary' size='sm'>Cadastrar grupo</Button>
                    </div>
                    <div className='mt-4'>
                        <Table
                        aria-label="Example table with dynamic content"
                        removeWrapper
                        classNames={
                            {
                                wrapper: ["max-h-[382px]", "max-w-3xl"],
                                th: ["bg-transparent", "font-bold", "text-white", "border-b", "border-divider"],
                                td: [
                                  // changing the rows border radius
                                  // first
                                  "group-data-[first=true]/tr:first:before:rounded-none",
                                  "group-data-[first=true]/tr:last:before:rounded-none",
                                  "text-zinc-400",
                                  // middle
                                  "group-data-[middle=true]/tr:before:rounded-none",
                                  // last
                                  "group-data-[last=true]/tr:first:before:rounded-none",
                                  "group-data-[last=true]/tr:last:before:rounded-none",
                                ],
                              }
                        }
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
            </div>
        </div>
    )
}

export default Page