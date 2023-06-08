import React, { useState } from 'react'
import { SongContext } from './SongContext'
import { ChooseSongs } from './ChooseSongs'
import { PlaySongNext } from './PlaySongNext'
import { HeaderNext } from './HeaderNext'
import { FooterNext } from './FooterNext'

interface Song {
  name: string
  by: string
  image: string
  audio: string
}

const initialSong: Song = {
  name: 'You and Me',
  by: 'しゃろう',
  image: 'placeholder.png',
  audio: 'you_and_me.mp3',
}

export const NextScreen: React.FC = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(initialSong)

  return (
    <SongContext.Provider value={{ currentSong, setCurrentSong }}>
      <HeaderNext />
      <PlaySongNext />
      <ChooseSongs />
      <FooterNext />
    </SongContext.Provider>
  )
}
