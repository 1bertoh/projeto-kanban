'use client'
// src/components/Column.jsx
import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import Task from './task';
import * as data from './_data';
import { Ellipsis, Plus } from 'lucide-react';

type props = {
    column: data.Column,
    tasks: data.Task[],
    index: number
}

const Column = (props: props) => {
    const { column, index, tasks } = props
  return (
    <div
        className='m-2 border-1 border-slate-500 rounded-sm w-64 flex flex-col bg-zinc-900 h-full'
    >
      <div className='flex justify-between items-center px-1'>
        <div>
          <h3 style={{ padding: '8px' }}>{column.title}</h3>
        </div>
        <div className='flex gap-2 items-center'>
          <Ellipsis className='text-zinc-400' />
          <Plus className='text-zinc-400'/>
        </div>
      </div>
      <Droppable droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`m-2 ${snapshot.isDraggingOver ? 'bg-zinc-700' : 'bg-zinc-800'} p-2 flex-grow-[1] min-[100px] h-full`}
          >
            {tasks.map((task: data.Task, index: number) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;