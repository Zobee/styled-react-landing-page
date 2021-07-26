import {BackArrow, SignInContainer, SignInHeader, SignInForm, SignInLabel, SignInInput} from "./SignInElems"
import {Button} from '../ButtonElems'
import {Link} from 'react-router-dom'
const Signin = () => {
  return (
    <SignInContainer>
      <Link to='/'>
      <BackArrow />
      </Link>
      <SignInHeader>Sign In</SignInHeader>
      <SignInForm>
        <SignInLabel for='email'>
          Email Address
        </SignInLabel>
        <SignInInput name='email' type='email'/>
        <SignInLabel for='pw'>
          Password
        </SignInLabel>
        <SignInInput name='email' type='password'/>
        <Button>Sign In</Button>
      </SignInForm>
    </SignInContainer>
  )
}

export default Signin;
