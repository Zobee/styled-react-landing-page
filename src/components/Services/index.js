import {
  ServicesContainer, 
  ServicesH1, 
  ServicesWrapper, 
  ServicesCard, 
  ServicesIcon, 
  ServicesH2, 
  ServicesP} from "./ServicesElems"

const index = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Service 1</ServicesH2>
          <ServicesP>Service 1 Description</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Service 2</ServicesH2>
          <ServicesP>Service 2 Description</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>Service 3</ServicesH2>
          <ServicesP>Service 3 Description</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default index
