'use client'
// src/components/Board.jsx
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import Column from './column';
import * as data from './_data';
import { useParams } from 'next/navigation';

const Board = () => {
    // const [data, setData] = useState(initialData);
    const [project, setProject] = useState<data.Project>({} as data.Project)
    const [list, setList] = useState<data.List>({} as data.List)
    const [columns, setColumns] = useState<data.Column[]>([] as data.Column[])
    const [isLoading, setIsLoading] = useState(true)
    const router = useParams()

    useEffect(() => {
        const project = data.projects.find((p) => p.id === router?.idp);
        project && setProject(project);
    
        const list = data.lists.find((l) => l.id === router?.idl);
        list && setList(list);
    
        if (list) {
            const filteredColumns = data.columns
                .filter((c) => c.listId === list.id)
                .map((c) => ({
                    ...c,
                    tasks: data.tasks.filter((t) => t.column === c.id),
                }));
            setColumns(filteredColumns);
        }

        setIsLoading(false)
    }, [router?.idp, router?.idl]);

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;
    
        // Se não houver destino, não faz nada
        if (!destination) return;
    
        // Se a tarefa for solta no mesmo local, não faz nada
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }
    
        // Encontra a coluna de origem e a coluna de destino
        const startColumn: any = columns.find((c) => c.id === source.droppableId);
        const finishColumn: any = columns.find((c) => c.id === destination.droppableId);
    
        if (!startColumn || !finishColumn) return;
    
        // Encontra a tarefa que está sendo movida
        const taskToMove = startColumn.tasks.find((t: any) => t.id === draggableId);
        if (!taskToMove) return;
    
        // Se a tarefa for movida dentro da mesma coluna
        if (startColumn.id === finishColumn.id) {
            const newTasks = Array.from(startColumn.tasks);
            newTasks.splice(source.index, 1); // Remove a tarefa da posição original
            newTasks.splice(destination.index, 0, taskToMove); // Insere a tarefa na nova posição
    
            const updatedColumns = columns.map((c) =>
                c.id === startColumn.id ? { ...c, tasks: newTasks } : c
            );
    
            setColumns(updatedColumns);
            return;
        }
    
        // Se a tarefa for movida para outra coluna
        const startTasks = Array.from(startColumn.tasks);
        startTasks.splice(source.index, 1); // Remove a tarefa da coluna de origem
    
        const finishTasks = Array.from(finishColumn.tasks);
        finishTasks.splice(destination.index, 0, taskToMove); // Adiciona a tarefa na coluna de destino
    
        const updatedColumns = columns.map((c) => {
            if (c.id === startColumn.id) {
                return { ...c, tasks: startTasks };
            } else if (c.id === finishColumn.id) {
                return { ...c, tasks: finishTasks };
            } else {
                return c;
            }
        });
    
        setColumns(updatedColumns);
    };

    useEffect(() => {
        console.log('batata', columns)
    }, [columns])

    return (
        <>
        {
            isLoading ? 
            (
                <p>Loading...</p>
            ) : (
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="board" direction="horizontal" type="column">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                padding: '8px',
                                height: 'calc(100vh - 100px)'
                            }}
                        >
                            {list.columnsOrder.map((columnId, index) => {
                                const column:any = columns.find((c) => c.id === columnId);
                                const tasks = column.tasks;

                                return (
                                    <Column
                                        key={column?.id}
                                        column={column || {} as data.Column}
                                        tasks={tasks || {} as data.Task[]}
                                        index={index}
                                    />
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            )
        }
        </>
    );
};

export default Board;