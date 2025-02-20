import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, DivideCircle, Plus} from 'lucide-react'
import Image from 'next/image'
import { Sidebar } from '../app/components/Sidebar'
import { Footer } from '../app/components/Footer'

export default function Home() {
  return (
<div className="h-screen flex flex-col">
    <header className='bg-zinc-950 border-t border-zinc-700 px-6 py-2 flex items-center justify-between'>
      <div>
        <Image src="/spotify.png" width={40} height={40} alt="Logo Spotify" />
      </div>

      <div className="flex items-center gap-2">
        <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-white/10 text-zinc-400">
          <HomeIcon />
        </button>
        
        <div className='h-12 w-96 bg-white/10 rounded-full flex items-center px-4'>
          <div className="flex items-center gap-3 w-full">
            <button className="text-zinc-500">
              <Search />
            </button>
            <input 
              type="text" 
              placeholder="O que você quer ouvir?" 
              className="bg-transparent text-white font-semibold outline-none w-full placeholder-zinc-500"
            />
          </div>
        </div>

        <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-white/10 text-zinc-400">
          <Plus />
        </button>

      </div>

      <div>

      </div>
    </header>
  <div className="flex flex-1">

    <Sidebar />

    <main className="flex-1 p-6">
      <div className='flex items-center gap-4'>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronLeft />
        </button>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronRight />
        </button>
      </div>

      <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

      <div className='grid grid-cols-3 gap-6 mt-4'>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.jpeg" width={104} height={104} alt="Capa do album LP" />
          <strong>From Zero</strong>

          <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.jpeg" width={104} height={104} alt="Capa do album LP" />
          <strong>From Zero</strong>

          <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.jpeg" width={104} height={104} alt="Capa do album LP" />
          <strong>From Zero</strong>

          <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.jpeg" width={104} height={104} alt="Capa do album LP" />
          <strong>From Zero</strong>

          <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.jpeg" width={104} height={104} alt="Capa do album LP" />
          <strong>From Zero</strong>

          <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a href='#' className='bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
          <Image src="/album.jpeg" width={104} height={104} alt="Capa do album LP" />
          <strong>From Zero</strong>

          <button className="w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>

      <h2 className='font-semibold text-2xl mt-10'>Made for Kevin Brissow</h2>
      <div className='grid grid-cols-8 gap-4 mt-4'>
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpeg" className="w-full" width={104} height={104} alt="Capa do album LP" />
            <strong className='font-semibold'>Dayli Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
          </a>  
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpeg" className="w-full" width={104} height={104} alt="Capa do album LP" />
            <strong className='font-semibold'>Dayli Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
          </a>   
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpeg" className="w-full" width={104} height={104} alt="Capa do album LP" />
            <strong className='font-semibold'>Dayli Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
          </a>   
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpeg" className="w-full" width={104} height={104} alt="Capa do album LP" />
            <strong className='font-semibold'>Dayli Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
          </a>    
          <a href='' className='bg-white/5 p-3 rounded-md flex-col gap-2 hover:bg-white/10'>
            <Image src="/album.jpeg" className="w-full" width={104} height={104} alt="Capa do album LP" />
            <strong className='font-semibold'>Dayli Mix 1</strong>
            <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
          </a>    
      </div>
    </main>
  </div>

  <Footer />
  
</div>
  )
}
