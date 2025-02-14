'use client'
import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validation'

const SignIn = () => {
  return (
    <AuthForm 
    type="SIGN_IN"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: ""
    }}
    onSubmit={()=> {}}
    />
  )
}

export default SignIn