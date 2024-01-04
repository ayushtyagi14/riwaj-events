import { useRouter } from 'next/router';
import MyHead from '../components/Head';
import Sidebar from '../components/Sidebar';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <MyHead title={"Riwaj Events"} description={"Welcome To Riwaj Events!"} />
      <div className='h-screen overflow-hidden flex flex-col items-center justify-center relative'>
        <img src="/logo.png" alt="Logo" className='md:h-[450px] h-[200px] mx-auto' />
        <button
          className='bg-[#d59a30] border-2 border-[#d59a30] text-[20px] hover:bg-inherit text-white px-10 py-2 rounded mt-10 italic'
          onClick={() => router.push('/homepage')}
        >
          Enter
        </button>
        <Sidebar />
      </div>
    </div>
  );
}
