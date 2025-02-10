'use client'
import Board from '@/app/components/board'
import { Divider } from '@heroui/react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import * as data from '../../../../components/_data'

type Props = {}

const Page = (props: Props) => {
    const params = useParams()
  const [project, setProject] = useState(data.projects.find((p) => p.id === params.idp))
  const [list, setList] = useState(data.lists.find((l) => l.id === params.idl))

    useEffect(() => {

    }, [])

    return (
        <div className="App">
            <h1 className='pl-4 pb-4'>{`${project?.name}/${list?.name}`}</h1>
            <Divider className='text-zinc-400 mb-4' />
            <Board />
        </div>
    )
}

export default Page