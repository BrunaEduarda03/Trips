'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

function Footer() {
  const { theme, setTheme } = useTheme();
  return (
   
      <div className='p-5 bg-walterWhite flex flex-col justify-center items-center'>
      <Image src='/logo.png' height={23} width={133} alt='logo trips'  />
      <p className='mt-1 font-medium text-sm'>Todos os direitos reservados!</p>
      <p className='mt-1 font-normal text-sm'>Desenvolvido por Bruna Eduarda, 2023</p>
    </div>
    )
  
}

export default Footer