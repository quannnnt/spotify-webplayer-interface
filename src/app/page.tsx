import Image from 'next/image'
import { Piece } from './components/piece'
import { Link } from './components/link'
import { PartOfPiece } from './components/partofpiece'
import { Icon } from './components/icon'
import { Tag } from './components/tag'
import { Album } from './components/album'
import { Title } from './components/title'
import { Subtitle } from './components/subtitle'
import { Card } from './components/card'
import { IoMdPlay } from 'react-icons/io'

export default function Home() {

  const listPlaylist = [
    {
      musicName: 'Pop',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/taylor.png'
    },
    {
      musicName: 'Sertanejo',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/hej.webp'
    },
    {
      musicName: 'Rap',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/fdp.jpg'
    },
    {
      musicName: 'Funk',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/lets4.jpg'
    },
    {
      musicName: 'pisa',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/jgt.webp'
    },
    {
      musicName: 'Pagode/Samba',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/tdp.jpeg'
    },
    {
      musicName: 'Hm',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/derek.jpeg'
    },
    {
      musicName: 'Rrrrr',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/tz.jpeg'
    },
    {
      musicName: 'Rr',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/rj.jpg'
    },
    {
      musicName: 'coisas leves',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/rdf.jpeg'
    },
    {
      musicName: 'Billie',
      musicSubtitle: 'Playlist • Felipe Paggi',
      album: './img/album/billie.jpeg'
    },
  ]

  const listMainPlaylist = [
    {
      musicName: 'Músicas Curtidas',
      album: './img/album/liked.jpeg'
    },
    {
      musicName: 'Funk',
      album: './img/album/lets4.jpg'
    },
    {
      musicName: 'Billie',
      album: './img/album/billie.jpeg'
    },
    {
      musicName: 'coisas leves',
      album: './img/album/rdf.jpeg'
    },
    {
      musicName: 'hm',
      album: './img/album/rbn.jpg'
    },
    {
      musicName: 'Rr',
      album: './img/album/rj.jpg'
    },
  ]

  const listSuggested = [
    {
      musicName: 'Músicas Curtidas',
      musicSubtitle: '414 músicas',
      album: './img/album/liked.jpeg'
    },
    {
      musicName: 'AUTOMOTIVO TIKTOK',
      musicSubtitle: 'AUTOMOTIVO TIKTOK 2023/2024',
      album: './img/album/rbn.jpg'
    },
    {
      musicName: 'Billie',
      musicSubtitle: 'De Felipe Paggi',
      album: './img/album/billie.jpeg'
    },
    {
      musicName: 'coisas leves',
      musicSubtitle: ' De Felipe Paggi',
      album: './img/album/rdf.jpeg'
    }
  ]

  const array6 = ['1', '2', '3', '4', '5', '6']

  return (
    <>
      <main className='w-screen h-screen py-2 ps-2'>
        <section className='flex w-[calc(100%-6px)] min-w-[925px] h-[calc(99%-85px)] min-h-[515px] gap-2'>
          <div className='flex flex-col w-[425px] h-full gap-2'>
            <Piece width='100%' height='111px' className='flex flex-col justify-center rounded-lg py-3 px-7 gap-1'>
              <Link textLink='Início' img='./img/icon/home.png' />
              <Link textLink='Buscar' img='./img/icon/search.png' />
            </Piece>
            <Piece width='100%' height='calc(100% - 119px)' className='rounded-lg pt-3'>
              <PartOfPiece height='90px' className='flex flex-col gap-2 px-4 pb-2'>
                <div className='w-full h-[32px] flex'>
                  <div className='w-4/6 h-full flex items-center gap-4 px-2 group'>
                    <Icon height='70%' src='./img/icon/library.png' className='invert-[0.7] group-hover:invert' />
                    <h2 className='text-zinc-400 group-hover:text-white font-sans text-[14px] font-medium cursor-pointer'>Sua Biblioteca</h2>
                  </div>
                  <div className='w-2/6 h-full flex justify-end items-center gap-6 px-3'>
                    <Icon height='50%' src='./img/icon/plus.png' filter='invert(0.7)' />
                    <Icon height='75%' src='./img/icon/right-arrow.png' filter='invert(0.7)' />
                  </div>
                </div>
                <div className='w-full h-[42px] flex items-end gap-2'>
                  <Tag textTag='Playlists' className='w-auto flex items-center px-3 hover:brightness-110 cursor-pointer' />
                  <Tag textTag='Artistas' className='w-auto flex items-center px-3 hover:brightness-110 cursor-pointer' />
                  <Tag textTag='Álbuns' className='w-auto flex items-center px-3 hover:brightness-110 cursor-pointer' />
                </div>
              </PartOfPiece>
              <PartOfPiece height='calc(100% - 90px)' className='px-2 scrollbar'>
                <div className='w-full h-[40px] flex items-center px-2'>
                  <div className='w-auto rounded-full cursor-pointer transition-colors hover:bg-neutral-800 p-2'>
                    <Icon height='16px' src='./img/icon/search.png' filter='invert(0.7)' />
                  </div>
                  <div className='w-[calc(100%-30px)] h-full flex items-center justify-end gap-1'>
                    <p className='text-zinc-400 text-[12px] font-sans font-medium'>Recentes</p>
                    <img src='./img/icon/list.png' className='h-[15px] invert-[0.8]' alt='fds' />
                  </div>
                </div>
                {listPlaylist.map(function (item) {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div className='w-full h-[64px] cursor-pointer flex items-center justify-start p-2 rounded-md gap-3 transition-colors hover:bg-zinc-900'>
                      <Album src={item.album} className='h-full rounded-md' />
                      <div>
                        <Title title={item.musicName} size='15px' />
                        <Subtitle subtitle={item.musicSubtitle} />
                      </div>
                    </div>
                  )
                })}
              </PartOfPiece>
            </Piece>
          </div>

          <Piece width='calc(100% - 425px)' minWidth='500px' height='100%' className='rounded-lg bg-slate-600 scrollbar'>
            <PartOfPiece width='100%' height='70px' className='flex items-center rounded-t-lg rounded-tr-lg ps-6 pe-1'>
              <div className='w-1/4 flex gap-2'>
                <Tag className='w-auto flex items-center p-1 cursor-pointer'>
                  <img src='./img/icon/right.png' className='h-full invert-[0.7] rotate-180' alt='fds' />
                </Tag>
                <Tag className='w-auto flex items-center p-1 cursor-pointer'>
                  <img src='./img/icon/right.png' className='h-full invert-[0.7]' alt='fds' />
                </Tag>
              </div>
              <div className='w-3/4 flex justify-end gap-2'>
                <Tag textTag='Instalar aplicativo' className='w-auto text-zinc-100 font-bold flex items-center gap-1 py-1 px-2 cursor-pointer'>
                  <img src='./img/icon/download.png' className='h-4/5 invert-[0.9]' alt='fds' />
                </Tag>
                <Tag className='w-auto flex items-center p-2 cursor-pointer'>
                  <img src='./img/icon/notify.png' className='h-full invert-[0.7]' alt='fds' />
                </Tag>
                <Tag className='w-auto flex items-center p-1 cursor-pointer'>
                  <img src='./img/profile.jpg' className='h-full rounded-full' alt='fds' />
                </Tag>
              </div>
            </PartOfPiece>
            <div className='w-full max-w-[1950px] ps-6 pe-1 pb-4'>
              <PartOfPiece width='100%' className='flex flex-col gap-8 mb-2'>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                  {listMainPlaylist.map(function (item) {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div className='flex h-[46px] items-center justify-start bg-neutral-800/85 transition-colors hover:bg-neutral-700 cursor-pointer gap-3 rounded group'>
                        <Album src={item.album} className='h-full rounded-s' />
                        <div className='w-full flex justify-between items-center'>
                          <Title title={item.musicName} size='14px' />
                          <div className='w-8 h-8 flex justify-center items-center bg-green-500 me-3 rounded-full invisible group-hover:visible hover:drop-shadow'>
                            <IoMdPlay className='w-4 h-4 invert ms-1' />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                {
                  array6.map(() => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='flex flex-col gap-4'>
                      <div className='flex items-center justify-between'>
                        <Title title='Os maiores hits do momento' className='hover:underline cursor-pointer' size='24px' />
                        <p className='text-zinc-400 text-[14px] font-sans font-medium hover:underline cursor-pointer'>Mostrar Tudo</p>
                      </div>
                      <div className='flex flex-wrap gap-6'>
                        {
                          listSuggested.map(function (item) {
                            return (
                              // eslint-disable-next-line react/jsx-key
                              <Card width='199.5px' height='280px'>
                                <div className='w-full'>
                                  <Album src={item.album} className='h-full rounded' />
                                </div>
                                <div className='flex flex-col mt-3 gap-1'>
                                  <Title title={item.musicName} size='14px' />
                                  <Subtitle subtitle={item.musicSubtitle} />
                                </div>
                              </Card>
                            )
                          })
                        }
                      </div>
                    </div>
                  ))
                }
              </PartOfPiece>
            </div>
          </Piece>
        </section>
        <section className='flex w-[calc(100%-6px)] min-w-[925px] h-[85px] items-center gap-2'>
          <div className='w-1/4 min-w-[231.25px] h-[55px] flex items-center justify-start px-4 gap-3'>
            <Album src='./img/album/bdr.webp' className='h-full rounded-md' />
            <div className='flex items-center flex-row gap-3'>
              <div>
                <Title title='Bonde da Rock' className='hover:underline cursor-pointer' />
                <Subtitle subtitle='Major RD, Rock Danger, meLLo' className='hover:underline cursor-pointer' />
              </div>
              <Icon height='15px' src='./img/icon/greenHeart.png' filter='brightness(1.1)' />
            </div>
          </div>
          <div className='w-1/2 min-w-[462.5px] h-[60px] flex flex-col items-center justify-center'>
            <div className='flex h-10 items-center gap-5'>
              <Icon height='22px' src='./img/icon/random.png' filter='invert(0.7)' />
              <div className='transform rotate-180'><Icon height='14px' src='./img/icon/next.png' filter='invert(0.7)' /></div>
              <Icon height='35px' src='./img/icon/play.png' filter='invert(1)' />
              <Icon height='14px' src='./img/icon/next.png' filter='invert(0.7)' />
              <div className='transform rotate-180 mt-1'><Icon height='18px' src='./img/icon/repeat.png' filter='invert(0.7)' /></div>
            </div>
            <div className='w-3/4 h-10 flex justify-center items-center gap-2'>
              <Subtitle subtitle='1:57' />
              <div className='w-full max-w-[440px] h-1 flex bg-neutral-700 rounded-[5px] group'>
                <div className='w-[78%] max-w-[363px] h-1 rounded-[5px] bg-white transition-colors group-hover:bg-green-500' />
                <div className='w-4 h-4 bg-white rounded-full mt-[-6px] ml-[-6px] mb-2 invisible group-hover:visible' />
              </div>
              <Subtitle subtitle='2:45' />
            </div>
          </div>
          <div className='w-1/4 min-w-[231.25px] h-[55px] flex justify-end items-center px-4 gap-4'>
            <Icon height='18px' src='./img/icon/playingnow.png' filter='invert(0.7)' />
            <Icon height='16px' src='./img/icon/microphone.png' filter='invert(0.7)' />
            <Icon height='18px' src='./img/icon/playlist.png' filter='invert(0.7)' />
            <Icon height='20px' src='./img/icon/desktop.png' filter='invert(0.7)' />
            <div className='w-full flex items-center group gap-4 max-w-[150px]'>
              <Icon height='20px' src='./img/icon/volume.png' filter='invert(0.7)' />
              <div className='w-full h-1 flex bg-neutral-700 rounded-[5px] ml-[-6px]'>
                <div className='w-[67%] max-w-[67px] h-1 bg-white rounded-[5px] transition-colors group-hover:bg-green-500' />
                <div className='w-4 h-4 bg-white rounded-full mt-[-6px] ml-[-6px] mb-2 invisible group-hover:visible' />
              </div>
            </div>
            <Icon height='18px' src='./img/icon/display.png' filter='invert(0.7)' />
            <Icon height='18px' src='./img/icon/full-screen.png' filter='invert(0.7)' />
          </div>
        </section>
      </main >
    </>
  )
}