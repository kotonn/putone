import React, { useState, useRef, useEffect, useContext } from 'react'
import { SongContext, SongContextType } from './SongContext'

export const PlaySongNext: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const buttonIcon = isPlaying ? 'pause.png' : 'play.png'
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { currentSong } = useContext<SongContextType>(SongContext)

  useEffect(() => {
    if (!audioRef.current) {
      return
    }
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const playMusic = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="play" id="play">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="left-col">
                <h1 id="songName">{currentSong?.name}</h1>
                <h5>
                  ~<em id="songBy">{currentSong?.by}</em>
                </h5>
              </div>
              <div className="right-col">
                <img
                  src={buttonIcon}
                  alt="play-button"
                  id="icon"
                  onClick={playMusic}
                />
                <p>Click Here To Listen</p>
              </div>
            </div>
          </div>
        </div>
        <audio id="song" ref={audioRef}>
          <source src={currentSong?.audio} type="audio/mp3" />
        </audio>
      </div>
    </section>
  )
}
