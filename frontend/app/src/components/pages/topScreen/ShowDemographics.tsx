import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export const ShowDemographics: React.FC = () => {
  return (
    <>
      <section data-aos="fade-down" data-aos-delay="500">
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
              <p className="leading-relaxed text-theme-sub2 custom-font-for-main">
                Users
              </p>
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
              <p className="leading-relaxed text-theme-sub2 custom-font-for-main">
                Subscribes
              </p>
            </div>
            <div className="p-4 sm:w-1/3 w-1/2">
              <h2 className="sm:text-3xl md:text-4xl lg:text-5xl text-3xl text-white">
                <CountUp end={315}>
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p className="leading-relaxed text-theme-sub2 custom-font-for-main">
                Downloads
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
