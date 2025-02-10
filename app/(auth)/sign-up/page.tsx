'use client'

import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validation'
import React from 'react'

const SignUp = () => {
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

export default SignUp