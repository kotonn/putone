import React from 'react'
import { Header } from '../header/Header'
import { useForm } from 'react-hook-form'

export const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: unknown) => {
    console.log(data)
  }
  return (
    <div className="bg-black  text-white w-full min-h-screen">
      <Header />
      <section className="relative" data-aos-id-blocks>
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1
              className="sm:text-3xl text-2xl mb-10 text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact
            </h1>
            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              当アプリに関するお問い合わせやご意見などは、下記のフォームよりお願いいたします。
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:w-1/2 md:w-2/3 mx-auto"
          >
            <div className="flex flex-wrap -m-2">
              <div
                className="p-2 w-1/2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    名前
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-theme-sub focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div
                className="p-2 w-1/2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    メールアドレス
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-theme-sub focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div
                className="p-2 w-full"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white font-semibold"
                  >
                    内容
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    name="message"
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-theme-sub focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div
                className="p-2 w-full"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <button
                  type="submit"
                  className="flex mx-auto text-black hover:text-theme-default bg-theme-default hover:bg-theme-main  border-0 py-2 px-8 rounded-2xl text-lg"
                >
                  送る
                </button>
              </div>
              <div
                className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <a className="text-theme-main">info@putone.jp</a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
