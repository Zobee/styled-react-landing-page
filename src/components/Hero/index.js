import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, Button } from "./HeroElems";
import HeroVid from "../../media/herovid.mp4"
const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={HeroVid} type="video/mp4"/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Really Catchy Tagline</HeroH1>
        <HeroP>
          Subtitle and catchy call to action text that will make you wanna sign up.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;