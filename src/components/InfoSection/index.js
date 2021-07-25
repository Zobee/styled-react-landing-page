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
import { Button } from 'react-scroll'
const InfoSection = ({id}) => {
  return (
    <>
      <InfoContainer id={id}>
        <InfoWrapper>
          <InfoRow>
            <Col1>
              <TextWrapper>
                <TopLine>Top Line</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to='home' />
                </BtnWrap>
              </TextWrapper>
            </Col1>
            <Col2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Col2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection