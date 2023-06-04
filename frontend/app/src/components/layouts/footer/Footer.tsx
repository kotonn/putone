import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="text-white body-font border-t">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          className="flex items-center md:justify-start justify-center"
          href="/"
        >
          <span className="ml-3 font-light">PuTone</span>
        </a>
        <span className="inline-flex sm:ml-auto mr-4 justify-center sm:justify-start">
          <a href="https://instagram.com/">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}
