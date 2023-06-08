import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export const FooterNext: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="title">SNS</h2>
      <div className="social-media">
        <a
          href="https://www.instagram.com/__cynophilist__._/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="4x" />
        </a>
      </div>
      <footer className="footer">
        <p>
          © Design by{' '}
          <a
            href="https://bhavya-khurana.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Bhavya Khurana
          </a>
        </p>
        <p>
          Contributed by{' '}
          <a
            href="https://github.com/Jateeeen"
            target="_blank"
            rel="noreferrer"
          >
            Jatin
          </a>
        </p>
      </footer>
    </section>
  )
}
