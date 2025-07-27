import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit veniam reiciendis exercitationem, totam doloribus dolores autem iusto eveniet, porro voluptatum? In sed sapiente sint doloremque, tenetur iure officia saepe.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit veniam reiciendis exercitationem, totam doloribus dolores autem iusto eveniet, porro voluptatum? In sed sapiente sint doloremque, tenetur iure officia saepe.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia dolore eos illum dicta molestiae fugiat veritatis consequatur totam facilis, delectus excepturi, velit dolores atque expedita. Tempore cupiditate alias iste.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose Us'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, officiis ad? Nulla illum mollitia aspernatur? Molestiae tenetur animi dicta ab ratione hic quibusdam recusandae voluptate odio iste, nemo cumque! Non!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, officiis ad? Nulla illum mollitia aspernatur? Molestiae tenetur animi dicta ab ratione hic quibusdam recusandae voluptate odio iste, nemo cumque! Non!</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exeptional Customer Service: </b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, officiis ad? Nulla illum mollitia aspernatur? Molestiae tenetur animi dicta ab ratione hic quibusdam recusandae voluptate odio iste, nemo cumque! Non!</p>
        </div>

      </div>

      <NewsLetter/>

    </div>
  )
}

export default About
