import Image from 'next/image'
import Link from 'next/link'

import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* LEFT */}
      <div className='md:hidden lg:block w-[20%]'>
        <Link href='/' className='z-10 flex items-center py-1'>
          <Image
            src='/logo.png'
            height='50'
            quality={100}
            width='50'
            alt='logo'
            className='mr-2'
          />
          <span className='text-blue-700 font-medium text-xl tracking-wide'>
            MILO
          </span>
        </Link>
      </div>

      {/* CENTER */}
      <div className='hidden md:flex w-[50%] text-sm items-center justify-between'>
        <div className='flex gap-6 text-gray-600'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/home.png'
              alt='Homepage'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <span>Homepage</span>
          </Link>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/friends.png'
              alt='Friends'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <span>Friends</span>
          </Link>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/stories.png'
              alt='Stories'
              width={16}
              height={16}
              className='w-4 h-4'
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent outline-none'
          />
          <Image src='/search.png' alt='' width={14} height={14} />
        </div>
      </div>

      {/* RIGHT */}
      <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end'>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
