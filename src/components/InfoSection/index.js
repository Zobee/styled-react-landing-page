import {
  InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  Col1, 
  Col2,
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle, 
  BtnWrap, 
  ImgWrap,
  Img
} from './InfoSectionElem'
import { Button } from '../ButtonElems'
const InfoSection = ({
  id, 
  lightBg, 
  imgStart, 
  topline, 
  headline, 
  subtitle, 
  lightText, 
  lightTextDesc, 
  description,
  buttonLabel,
  darkText,
  img,
  alt,
  primary,
  dark,
  dark2}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Col1>
              <TextWrapper>
                <TopLine>{topline}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button 
                  to='home' 
                  smooth 
                  duration={500} 
                  spy 
                  exact="true" 
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Col1>
            <Col2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Col2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection