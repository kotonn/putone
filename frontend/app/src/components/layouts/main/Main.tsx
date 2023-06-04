import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export const Main: React.FC = () => {
  return (
    <section>
      <div
        className="flex flex-col w-full min-h-screen justify-center items-center text-center md:text-center -mt-10"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        <h1 className="text-2xl tracking-tighter text-white lg:text-6xl md:text-6xl">
          服を着るように、音楽を着る
        </h1>
        <button className="text-white md:text-3xl font-semibold py-3 md:py-6 px-4 md:px-8 border border-gray-400 rounded-2xl md:rounded-3xl mt-20">
          Subscribe
        </button>
      </div>

      <section className="text-gray-600" data-aos-id-blocks>
        <section
          className="text-gray-600"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <div className="container px-5 py-10 mx-auto h-[50vh]">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="sm:text-3xl md:text-4xl lg:text-5xl text-3xl text-white">
                  <CountUp end={940} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="sm:text-3xl md:text-4xl lg:text-5xl text-3xl text-white">
                  <CountUp end={740} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="sm:text-3xl md:text-4xl lg:text-5xl text-3xl text-white">
                  <CountUp end={315} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="w-screen min-h-screen flex flex-wrap md:justify-center md:items-center lg:justify-center lg:items-center xl:justify-center xl:items-center"
          data-aos-id-blocks
        >
          <div
            className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
            data-aos="fade-in"
            data-aos-delay="500"
          >
            <div className="flex flex-col mb-20 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-5 md:mb-7">
                  Vision
                </h2>
                <p className="leading-relaxed text-lg mx-10">
                  誰もが音楽で自分を表現できる世界に
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-20 mt-20 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-5 md:mb-7">
                  Mision
                </h2>
                <p className="leading-relaxed text-lg mx-10">
                  音楽共有から、様々な音楽との出会いを創造し、人々の感性を豊かにする。
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-20 mt-20 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-white text-2xl title-font font-medium mb-5 md:mb-7">
                  Value
                </h2>
                <p className="leading-relaxed text-lg mx-10">
                  自分を発信し続ける
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col">
                  <h2 className="text-lg text-white font-medium ml-3 mb-3">
                    初回登録
                  </h2>
                  <p className=" text-white ml-3 mb-5">
                    当アプリを使用する上で必要な情報を入力する
                  </p>
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center border"
                    src="placeholder.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
