import React from 'react'
import SearchInputRestaurant from '../SearchInputRestaurant'

function Hero() {
  return (
    <div
      className='py-28 w-full'
      style={{
        backgroundImage: "url('/images/BackGround.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat",
      }}
    >
      <div className='max-w-4xl mx-auto flex flex-col justify-center items-center gap-7 px-5'>
        <img
          src='/images/Zomato-Logo.png'
          alt='Zomato Logo'
          className={'md:h-14 h-8 w-auto'}
        />{""}
        <h1 className='md:text-4xl text-xl text-white text-center mb-4'>
          Discover the best food & drinks in Chhatrapati Smabhajingagar
        </h1>
        <SearchInputRestaurant />
      </div>
    </div>
  )
}

export default Hero
