import { useRouter } from 'next/router'
import MyHead from '../components/Head'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <MyHead title={"Riwaj Events"} description={"Welcome To Riwaj Events!"} />
      <div className='h-screen overflow-hidden flex flex-col items-center justify-center'>
        <img src="/logo.png" alt="Logo" className='md:h-[200px] mx-auto' />
        <button
          className='bg-[#d59a30] hover:bg-transparent hover:border-2 hover:border-[#d59a30] text-[20px] hover:text-[#d59a30] uppercase text-white md:w-[20%] hover:font-bold w-[70%] mx-auto py-2 rounded-lg mt-10'
          onClick={() => router.push('/homepage')}
        >
          Enter
        </button>
      </div>
    </div>
  )
}
