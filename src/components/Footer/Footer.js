import {
  FooterContainer,
  FooterData,
  FooterIcon,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterData>
          © 2022 | All Rights Reserved | Developed by
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/HryhoriiAndriiets1974'
          >
            <FooterIcon />
          </a>
      </FooterData>
    </FooterContainer>
  )
}
