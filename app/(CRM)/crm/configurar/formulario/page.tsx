'use client'
import Title from '@/app/components/title'
import { Checkbox, getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react'
import React from 'react'

const Page = () => {
  const rows = [
    {
      key: "1",
      nivel: "1",
      nome: "Prospecção",
      cancelamento: <Checkbox className='mx-auto max-w-full w-[100%] justify-center' color='success' defaultSelected />,
    },
    {
      key: "2",
      nivel: "2",
      nome: "Contato Efetuado",
      cancelamento: <Checkbox className='mx-auto max-w-full w-[100%] justify-center' color='success' defaultSelected />,
    },
    {
      key: "3",
      nivel: "3",
      nome: "Proposta Enviada",
      cancelamento: <Checkbox className='mx-auto max-w-full w-[100%] justify-center' color='success' />,
    },
    {
      key: "4",
      nivel: "4",
      nome: "Proposta Fechada",
      cancelamento: <Checkbox className='mx-auto max-w-full w-[100%] justify-center' color='success' />,
    },
    {
      key: "5",
      nivel: "5",
      nome: "Proposta não Fechada",
      cancelamento: <Checkbox className='mx-auto max-w-full w-[100%] justify-center' color='success' />,
    },
  ];

  const columns = [
    {
      key: "nivel",
      label: "Nível",
    },
    {
      key: "nome",
      label: "Nome",
    },
    {
      key: "cancelamento",
      label: "Cancelamento",
    },
  ];

  return (
    <div>
      <Title title='Configuração do CRM' />
      <div>
        <Table
        className='mx-auto max-w-3xl'
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
              <TableRow key={item.key} className='w-full'>
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