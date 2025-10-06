import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaPhoneVolume,
} from 'react-icons/fa'
import { Email } from './email'
import { CONTACTS } from '@/utils/constants'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer_col max-650:order-2">
        <a
          href="https://linkedin.com"
          target="_blank"
          aria-label="LinkedIn"
          className="icon_hover"
        >
          <FaLinkedin className="footer_icon" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          aria-label="Twitter"
          className="icon_hover"
        >
          <FaTwitter className="footer_icon" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          aria-label="Facebook"
          className="icon_hover"
        >
          <FaFacebook className="footer_icon" />
        </a>
      </div>
      <div className=" max-650:order-1">
        <p>@EUPERSONEL</p>
      </div>

      <div className="footer_col max-650:order-3">
        <Email />

        <a
          className={'icon_hover footer_icon -rotate-45'}
          target="_blank"
          href={`tel:${CONTACTS.PHONE}`}
        >
          <FaPhoneVolume className="footer_icon" />
        </a>
      </div>
    </footer>
  )
}
