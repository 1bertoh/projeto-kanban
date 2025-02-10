export interface Project {
    id: string;
    name: string;
}

export interface List {
    id: string;
    name: string;
    columnsOrder: string[];
    projectId: string;
}

export interface Column {
    id: string;
    title: string;
    listId: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    timeLeft: string;
    etiquetas: Etiqueta[];
    responsaveis: User[];
    prioridade: Prioridade;
    messages: Message[];
    column: string;
}

export interface Message {
    id: number;
    id_task: string;
    author: User;
    content: string;
    image?: string;
    replies: Message[];
}

export interface Etiqueta {
    id: number;
    name: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    picture: string;
}

export interface Prioridade {
    id: number;
    name: string;
    color: string;
}

export const users: User[] = [
    { id: 1, name: 'Humberto Junior', email: 'humbertoxjunior@gmail.com', password: '123456', picture: '' },
    { id: 2, name: 'Ronald Weasley', email: 'ronaldxweasley@gmail.com', password: '123456', picture: '' },
    { id: 3, name: 'Hermione Granger', email: 'hermione@gmail.com', password: '123456', picture: '' },
    { id: 4, name: 'Harry Potter', email: 'harry@gmail.com', password: '123456', picture: '' },
];

export const prioridades: Prioridade[] = [
    { id: 1, name: 'Alta', color: 'red' },
    { id: 2, name: 'Média', color: 'orange' },
    { id: 3, name: 'Baixa', color: '#79b0fe' },
];

export const etiquetas: Etiqueta[] = [
    { id: 1, name: 'Backend' },
    { id: 2, name: 'Frontend' },
    { id: 3, name: 'UI/UX' },
    { id: 4, name: 'Bug' },
];

export const projects: Project[] = [
    { id: '1', name: 'C3 FRONT' },
    { id: '2', name: 'KANBAN FRONT' },
    { id: '3', name: 'MOBILE APP' },
];

export const lists: List[] = [
    { id: '1', name: 'Sprint Atual', columnsOrder: ['column-1', 'column-2', 'column-3'], projectId: '1' },
    { id: '2', name: 'Backlog', columnsOrder: ['column-4', 'column-5'], projectId: '2' },
];

export const columns: Column[] = [
    { id: 'column-1', title: 'Para Fazer', listId: '1' },
    { id: 'column-2', title: 'Fazendo', listId: '1' },
    { id: 'column-3', title: 'Feito', listId: '1' },
    { id: 'column-4', title: 'Backlog de Features', listId: '2' },
    { id: 'column-5', title: 'Bugs Pendentes', listId: '2' },
];

export const messages: Message[] = [
    { id: 1, author: users[0], content: 'Muito bom!!', id_task: 'task-1', replies: [] },
    { id: 2, author: users[1], content: 'Isso precisa ser revisado.', id_task: 'task-2', replies: [] },
    { id: 3, author: users[2], content: 'Ajustei os detalhes.', id_task: 'task-3', replies: [] },
];

export const tasks: Task[] = [
    {
        id: 'task-1',
        title: 'Criar layout da dashboard',
        description: 'Criar o layout inicial da dashboard de usuários.',
        startDate: '06-02-2025',
        endDate: '10-02-2025',
        etiquetas: [etiquetas[1], etiquetas[2]],
        messages: messages.filter(m => m.id_task === 'task-1'),
        prioridade: prioridades[0],
        responsaveis: [users[0]],
        timeLeft: '4 dias',
        column: 'column-1',
    },
    {
        id: 'task-2',
        title: 'Implementar API de autenticação',
        description: 'Desenvolver a API de login e autenticação.',
        startDate: '06-02-2025',
        endDate: '12-02-2025',
        etiquetas: [etiquetas[0]],
        messages: messages.filter(m => m.id_task === 'task-2'),
        prioridade: prioridades[1],
        responsaveis: [users[1]],
        timeLeft: '6 dias',
        column: 'column-2',
    },
    {
        id: 'task-3',
        title: 'Corrigir bug no cadastro de usuários',
        description: 'Erro ao cadastrar usuários novos.',
        startDate: '07-02-2025',
        endDate: '09-02-2025',
        etiquetas: [etiquetas[3]],
        messages: messages.filter(m => m.id_task === 'task-3'),
        prioridade: prioridades[2],
        responsaveis: [users[2]],
        timeLeft: '2 dias',
        column: 'column-3',
    },
];
