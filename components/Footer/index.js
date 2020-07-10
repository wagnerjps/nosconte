import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return(
        <div className='bg-gray-700 p-4 mt-10'>
            <div className='container mx-auto text-center'>
                <div className='font-bold text-white'>
                    Projeto desenvolvido por:{' '}
                        <a className='hover:underline' href='https://www.linkedin.com/in/wagnerjps/'>Wagner Silva</a>{' '}/{' '} 
                        <a className='hover:underline' href='https://www.linkedin.com/in/wagnerjps/'>LinkedIn</a>{' '}/{' '}
                        <a className='hover:underline' href='https://github.com/wagnerjps'>Github</a>
                </div>
                <div className='mt-4 mx-auto'>
                    <p className='font-sans text-3xl font-bold text-blue-400 text-center mx-auto'>
                        <img className='mx-auto block inline w-12 h-12 mr-2' src='/w.png' alt='WS Dev' />
                        <span className='text-green-500'>W</span>ag <span className='text-green-500'>D</span>ev
                    </p>
                    
                    
                </div>
            </div>
        </div>
        )
    }

export default Footer