import React from 'react'
import Card from '../../components/card'
import { Briefcase, Calendar, Clock, List, User2 } from 'lucide-react'

const Page = () => {
  return (
    <div>
      <h1>Olá, Humberto</h1>

      <div className='flex gap-y-5 flex-wrap justify-between'>
        <div className='md:w-[49%]'>
          <Card title='Recentes'>
            <div className='h-80 '>
              <div className='flex flex-col gap-3 items-center h-full justify-center text-zinc-500'>
                <Clock size={75}  />
                <p>Não há trabalhos atribuídos à você </p>
              </div>
            </div>
          </Card>
        </div>
        <div className='md:w-[49%]'>
          <Card title='Agenda'>
            <div className='h-80 '>
              <div className='flex flex-col gap-3 items-center h-full justify-center text-zinc-500'>
                <Calendar size={75}  />
                <p>Não há trabalhos agendados para você </p>
              </div>
            </div>
          </Card>
        </div>
        <div className='md:w-[49%]'>
          <Card title='Meu Trabalho'>
            <div className='h-80 '>
            <div className='flex flex-col gap-3 items-center h-full justify-center text-zinc-500'>
                <Briefcase size={75}  />
                <p>Não há trabalhos agendados para você </p>
              </div>
            </div>
          </Card>
        </div>
        <div className='md:w-[49%]'>
          <Card title='Atribuídas a Mim'>
            <div className='h-80 '>
            <div className='flex flex-col gap-3 items-center h-full justify-center text-zinc-500'>
                <User2 size={75}  />
                <p>Não há trabalhos atrubídos à você </p>
              </div>
            </div>
          </Card>
        </div>
        <div className='md:w-[49%]'>
          <Card title='Lista Pessoal'>
            <div className='h-80 '>
            <div className='flex flex-col gap-3 items-center h-full justify-center text-zinc-500'>
                <List size={75}  />
                <p>Você não tem uma lista pessoal </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Page