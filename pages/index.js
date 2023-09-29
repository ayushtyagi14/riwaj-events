import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Riwaj Events</title>
        <meta name="description" content="Welcome to Velvet and Rose!" />
      </Head>
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
