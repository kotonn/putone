import React from 'react'

export interface Song {
  name: string
  by: string
  image: string
  audio: string
}

export interface SongContextType {
  currentSong: Song | null
  setCurrentSong: React.Dispatch<React.SetStateAction<Song | null>>
}

const defaultSongContext: SongContextType = {
  currentSong: null,
  setCurrentSong: (
    _song: Song | null | ((prevSong: Song | null) => Song | null)
  ) => {
    console.log('')
  },
}

export const SongContext = React.createContext(defaultSongContext)
