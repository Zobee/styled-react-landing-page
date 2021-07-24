import { useState } from "react";
import { 
  HeroContainer,
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1, 
  HeroP, 
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper } from "./HeroElems";
import { Button } from "../ButtonElems";
import HeroVid from "../../media/herovid.mp4"
const Hero = () => {
  const [hover, setHover] = useState(false)
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
        <HeroBtnWrapper>
          <Button to="signup" 
          onMouseEnter={() => setHover(prev => !prev)} 
          onMouseLeave={() => setHover(prev => !prev)}
          primary="true"
          dark="true">
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;