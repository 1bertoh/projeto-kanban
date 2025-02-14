import { Divider } from '@heroui/react';
import React from 'react'

type Props = {
    title: string;
}

const Title = (props: Props) => {
  return (
    <div className='mb-10'>
        <h1 className='text-xl font-bold py-2'>{props.title}</h1>
        <Divider/>
    </div>
  )
}

export default Title