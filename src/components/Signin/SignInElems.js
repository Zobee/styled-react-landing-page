import styled from "styled-components";
import {AiOutlineArrowLeft} from 'react-icons/ai'

export const BackArrow = styled(AiOutlineArrowLeft)`
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  font-size: 2rem;
  cursor: pointer;
  color: #FFF;
  transition: all 0.25s ease;

  &:hover {
    color: #DDD;
    transform: rotateX(35deg);
  }
`

export const SignInContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #008831;
  color: #FFF;
  margin: 2rem auto;
  padding: 5em 2em;
  width: 50%;
  box-shadow: #053 0.5rem 0.2rem;
`

export const SignInHeader = styled.h1`
  font-size: 4rem;
`

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  margin-bottom: 1em;
`

export const SignInLabel = styled.label`
  margin: 0;
`

export const SignInInput = styled.input`
  margin 0.2em auto 1em;
  outline: none;
  border: none;
  padding: 0.25em;
  font-size: 1rem
`
