import { FaInstagram, FaSoundcloud, FaSpotify } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebRights,
  SocialIcons,
  SocialIconLink
} from './FooterElems'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='#'>Link 1</FooterLink>
              <FooterLink to='#'>Link 2</FooterLink>
              <FooterLink to='#'>Link 3</FooterLink>
              <FooterLink to='#'>Link 4</FooterLink>
              <FooterLink to='#'>Link 5</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='#'>Link 6</FooterLink>
              <FooterLink to='#'>Link 7</FooterLink>
              <FooterLink to='#'>Link 8</FooterLink>
              <FooterLink to='#'>Link 9</FooterLink>
              <FooterLink to='#'>Link 10</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>

            </SocialLogo>
            <WebRights>My Dope Site {new Date().getFullYear()} | All Rights Reserved</WebRights>
            <SocialIcons>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Spotify">
                <FaSpotify/>
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Soundcloud">
                <FaSoundcloud/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer