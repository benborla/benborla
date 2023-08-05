'use client'

import { TypeAnimation } from 'react-type-animation'
import Content from '@/components/Content'

export default function Home() {

  return (
    <Content>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
        <span className="font-extrabold
          text-transparent
          text-8xl bg-clip-text
          bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600
          hover:duration-500
          hover:from-lime-400 hover:via-neongreen hover:to-white
          cursor-pointer
        ">Ben Borla</span>
      </h1>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-[3rem] text-center mt-5">
        <span>I am a </span>
        <TypeAnimation sequence={[
          '⚡️ Full Stack Developer',
          2000,
          '🎨 Front-end Developer',
          2000,
          '💻 Back-end Developer',
          2000,
          '🎮 Gamer',
          2000,
          '🕹️ Retro Gamer',
          2000,
          '🏋 Gym Rat',
          2000,
        ]}
          className='text-neongreen'
          speed={50}
          wrapper='span'
          repeat={Infinity}
        />
      </h2>
    </Content>
  );
}
