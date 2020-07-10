import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Contato = () => {

    return (
            <div className='text-gray-700 body-font relative'>
                <PageTitle title='Teste' />
                <div className='container px-5 py-4 mx-auto'>
                    {/** BLOCO DE SAUDAÇÃO */}
                    <div className='flex flex-col text-center w-full mb-12'>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>Entre em contato</font>
                            </font>
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>
                                    <p>Entre em contato pelo emmail wagnerjps@gmail.com.</p>
                                    <p>Ou pelo número (11) 9 8160-3426.</p>
                                </font>
                            </font>
                        </p>
                    </div>
                    {/** BLOCO DE SAUDAÇÃO */}
                </div>
            </div>
    )   
}

export default Contato