import React, { useContext } from 'react'
import { SongContext, SongContextType } from './SongContext'

interface Song {
  name: string
  by: string
  image: string
  audio: string
}

const songs: Song[] = [
  {
    name: 'Khoya Sa',
    by: 'Kasyap',
    image: 'placeholder.png',
    audio: 'you_and_me.mp3',
  },
]

export const ChooseSongs: React.FC = () => {
  const { currentSong, setCurrentSong } =
    useContext<SongContextType>(SongContext)

  return (
    <>
      <section className="songs" id="songs">
        <div className="container">
          <div className="songs-header">
            <h2 className="title">Choose a Song</h2>
            {currentSong && (
              <a className="play-song-btn" href="#play">
                Play Song
              </a>
            )}
          </div>
          <div className="btn-group">
            {songs.map((song, index) => (
              <button
                key={index}
                type="button"
                className="btn"
                onClick={() => setCurrentSong(song)}
              >
                {song.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
