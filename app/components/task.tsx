'use client'

import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import * as data from './_data';
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@heroui/react';
import { Calendar, CircleDot, Clock, Flag, FlagIcon, Text, Ticket, User } from 'lucide-react';
import './task.scss'
import { useParams } from 'next/navigation';

type props = {
  task: data.Task;
  index: number
}

const Task = (props: props) => {
  const { index, task } = props
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <>
          <div
            onClick={onOpenChange}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`text-black ${snapshot.isDragging ? 'border-slate-200' : 'border-slate-700'} bg-zinc-900 border-1   text-white px-3 py-4 rounded-lg`}
            style={{
              marginBottom: '8px',
              ...provided.draggableProps.style,
            }}
          >
            <span className='text-sm font-semibold'>
              {task.title}
            </span>
            <div className='py-2'>
              <Text className='text-slate-400' size={16} />
            </div>
            <div className='flex gap-3 items-center'>
              <span className='text-xs p-1 bg-[#8b4513] rounded-full'>
                {task.responsaveis[0].name.slice(0, 2)}
              </span>
              <Calendar className='text-slate-400' size={16} />
            </div>
          </div>
          <TaskModal onOpen={onOpen} isModalOpen={isOpen} onOpenChange={onOpenChange} index={index} task={task} />
        </>
      )}
    </Draggable>
  );
};

type TTaskModal = {
  task: data.Task;
  index: number;
  onOpen: () => void;
  onOpenChange: () => void;
  isModalOpen: boolean
}

const TaskModal = (props: TTaskModal) => {
  const { task, onOpenChange, isModalOpen } = props
  const params = useParams()
  const [project] = useState(data.projects.find((p) => p.id === params.idp))
  const [list] = useState(data.lists.find((l) => l.id === params.idl))
  const [column] = useState(data.columns.find((c) => c.id === task.column)!)

  return (
    <Modal
      isOpen={isModalOpen}
      onOpenChange={onOpenChange}
      size='full'
      scrollBehavior='inside'
      classNames={
        {
          closeButton: 'text-[36px] top-[10px]',
          base: '!rounded-lg',
        }
      }
    >
      <ModalContent>
        {/* {(onClose) => ( */}
        <>
          <ModalHeader>
            <div className='flex w-full justify-between items-center pr-10'>
              <span className='font-normal text-slate-300'>
                {`${project?.name}/${list?.name}`}
              </span>

              <span className='flex items-center gap-3'>
                <span className='text-xs font-normal text-slate-300'>
                  {`Criado em ${task.startDate}`}
                </span>
                <Button color='primary'>
                  Compartilhar
                </Button>
              </span>
            </div>
          </ModalHeader>
          <Divider className='text-slate-700' />
          <ModalBody>
            <div className='flex h-full'>
              <Content task={task} column={column} />
              <Chat column={column} task={task} />
            </div>
          </ModalBody>
        </>
        {/* )} */}
      </ModalContent>
    </Modal>
  )
}

type TContent = {
  task: data.Task;
  column: data.Column
}

const Content = (props: TContent) => {
  const { task, column } = props

  return (
    <div className='w-8/12 overflow-y-scroll'>
      <div className='h-[1200px] w-10/12 mx-auto'>
        <h2 className='text-4xl font-bold py-10'>
          {task.title}
        </h2>
        <div className='flex w-full justify-between'>
          <table>
            <tbody>
              <tr >
                <td>
                  <span>
                    <CircleDot size={'1.2rem'} /> Status
                  </span>
                </td>
                <td>
                  {column.title}
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Calendar size={'1.2rem'} /> Datas
                  </span>
                </td>
                <td>
                  {`${task.startDate} - ${task.endDate}`}
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Clock size={'1.2rem'} /> Tempo estimado
                  </span>
                </td>
                <td>
                  {`${task.timeLeft}`} dias
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Ticket size={'1.2rem'} /> Etiquetas
                  </span>
                </td>
                <td>
                  <span className='etiquetas'>
                    {
                      task.etiquetas.map((e) => (
                      <span key={e.id}>
                        {e.name}
                      </span>

                      ))
                    }
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <table className='h-fit'>
            <tbody>
              <tr >
                <td>
                  <span>
                    <User size={'1.2rem'} /> Responsáveis
                  </span>
                </td>
                <td>
                  <span className='responsaveis'>
                    {
                      task.responsaveis.map((r) => (
                        <span key={r.id}>
                          {r.name.slice(0, 2)}
                        </span>
                      ))
                    }
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <Flag size={'1.2rem'} /> Prioridade
                  </span>
                </td>
                <td className='flex gap-2 items-center'>
                  <FlagIcon size={'1.2rem'} color={task.prioridade.color} /> {task.prioridade.name}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='mt-16'>
          <Textarea
            variant='bordered'
            value={task.description}
          />
        </div>
      </div>
    </div>
  )
}

type TChat = {
  task: data.Task;
  column: data.Column
}
const Chat = (props: TChat) => {
  const { task} = props

  return (
    <div className='w-4/12 h-full bg-zinc-950 flex flex-col'>
      <div className='w-full bg-zinc-900'>
        <h3 className='py-4 px-3 text-2xl'>
          Atividades
        </h3>
      </div>
      <div className='h-full pt-3'>
        {
          task.messages.map((message) => (
          <Card key={message.id} classNames={{
            base: 'w-[96%] mx-auto border-1 border-slate-700 pt-2'
          }}>
            <CardHeader>
              <span className='flex items-center justify-between px-2 w-full'>
                <span className='flex gap-3 items-center'>
                  <span className='p-1 bg-[#8b4513] rounded-full'>{message.author.name.slice(0, 2)}</span>
                  <span>{message.author.name}</span>
                </span>
                <span className='text-sm text-zinc-500'>
                  30 minutos
                </span>
              </span>
            </CardHeader>
            <CardBody>
              <p className='px-2'>
                {message.content}
              </p>
            </CardBody>
            <Divider className='text-slate-700' />
            <CardFooter>
              <div className='flex justify-end w-full px-2'>
                <span className='text-zinc-400'>
                  Responder
                </span>
              </div>
            </CardFooter>
          </Card>
          ))
        }
      </div>
      <div className='relative w-[98%] mx-auto'>
        <Button
          className='absolute right-2 z-20 top-1/2 -translate-y-1/2'
          value={'Enviar'}
          color='primary'
          size='sm'
        >
          Enviar
        </Button>
        <Input
          classNames={
            {
              input: 'pe-20'
            }
          }
          label='Escreva um comentario'
        />
      </div>
    </div>
  )
}

export default Task;