import { Button } from '@heroui/react'
import { Settings } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <div className='mt-[10vh]'>
      <div className='max-w-[50rem] mx-auto'>
        <h2 className='text-5xl text-zinc-400 font-bold mx-auto text-center'>
          Primeiro precisamos que você configure o seu CRM.
        </h2>
        <Settings style={{animationDuration: '6000ms'}} size={150} className='mx-auto animate-spin text-zinc-400 mt-8' />
        <div className='mt-8'>
          <a href="/crm/configurar/formulario">
            <Button fullWidth color='primary'>Configurar</Button>
          </a>
      </div>
      </div>
    </div>
  )
}

export default Page