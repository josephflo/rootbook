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
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={()=> {}}
    />
  )
}

export default SignIn