import React from 'react'
import { auth } from '../../../utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, Typography, styled } from '@mui/material'
import { Background } from '../../pages/topScreen/Background'
import { TextDencrypt } from '../../pages/topScreen/TextDencrypt'

type FormValues = {
  email: string
  password: string
}

const TopContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
}))

const MainTypography = styled(Typography)(() => ({
  marginBottom: '3rem',
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
    fontSize: '3rem',
    marginLeft: '1rem',
  },
  '@media (min-width: 768px)': {
    fontSize: '5rem',
  },
}))

const FormContainer = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

const LabelContainer = styled('label')(() => ({
  color: '#f9f4ef',
  fontSize: '1rem',
  marginLeft: '0.5rem',
  marginBottom: '0.5rem',
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
}))

const InputContainer = styled('input')(() => ({
  width: '20rem',
  height: '3rem',
  marginBottom: '2rem',
  padding: '2rem',
  borderRadius: '1rem',
  border: '1px solid',
  backgroundColor: 'transparent',
  color: '#f9f4ef',
  '@media (max-width: 768px)': {
    width: '15rem',
  },
}))

const ErrorTypography = styled(Typography)(() => ({
  color: 'red',
  fontSize: '0.8rem',
  marginLeft: '0.5rem',
  marginBottom: '2rem',
}))

const SignUpButtonContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
}))

const SignUpButton = styled(Button)(() => ({
  marginTop: '3rem',
  border: '1px solid',
  backgroundColor: 'transparent',
  borderRadius: '1rem',
  width: '10rem',
  padding: '1rem',
  '&:hover': {
    backgroundColor: '#d7532f',
  },
}))

const GuideTypography = styled(Typography)(() => ({
  color: '#f9f4ef',
  marginTop: '1rem',
  '@media (max-width: 768px)': {
    fontSize: '0.8rem',
  },
}))

const GuideToLoginButton = styled(Button)(() => ({
  color: '#f9f4ef',
  '&:hover': {
    color: '#d7532f',
  },
}))

export const Register: React.FC = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
=======
import { useNavigate, Link } from 'react-router-dom'
import { useState, FormEvent } from 'react'

export const Register: React.FC = () => {
  const navigate = useNavigate()
  const [error, setError] = useState<string>('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { email, password } = event.target as typeof event.target & {
      email: { value: string }
      password: { value: string }
    }
    createUserWithEmailAndPassword(auth, email.value, password.value)
>>>>>>> 375a2f060ee84edfe0828c7821378d392cd22080
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
<<<<<<< HEAD
        switch (error.code) {
          case 'auth/invalid-email':
            setError('email', {
              message: '正しいメールアドレスの形式で入力してください。',
            })
            break
          case 'auth/weak-password':
            setError('password', {
              message: 'パスワードは6文字以上を設定する必要があります。',
            })
            break
          case 'auth/email-already-in-use':
            setError('email', { message: 'そのメールアドレスは登録済みです。' })
            break
          default:
            setError('email', {
              message: 'メールアドレスかパスワードに誤りがあります。',
            })
=======
        console.log(error.code)
        switch (error.code) {
          case 'auth/invalid-email':
            setError('正しいメールアドレスの形式で入力してください。')
            break
          case 'auth/weak-password':
            setError('パスワードは6文字以上を設定する必要があります。')
            break
          case 'auth/email-already-in-use':
            setError('そのメールアドレスは登録済みです。')
            break
          default:
            setError('メールアドレスかパスワードに誤りがあります。')
>>>>>>> 375a2f060ee84edfe0828c7821378d392cd22080
            break
        }
      })
  }

  return (
<<<<<<< HEAD
    <>
      <TopContainer>
        <Background />
        <MainTypography>
          <div
            className="custom-font-for-sub"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <TextDencrypt text="Sign Up" />
          </div>
        </MainTypography>
        <FormContainer
          onSubmit={handleSubmit(onSubmit)}
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <LabelContainer htmlFor="email">Email</LabelContainer>
          <InputContainer
            {...register('email')}
            id="email"
            type="email"
            placeholder="example@putone.com"
          />
          {errors.email && (
            <ErrorTypography>{errors.email.message}</ErrorTypography>
          )}
          <LabelContainer htmlFor="email">Password</LabelContainer>
          <InputContainer
            {...register('password')}
            id="password"
            type="password"
            placeholder="password"
          />
          {errors.password && (
            <ErrorTypography>{errors.password.message}</ErrorTypography>
          )}
          <SignUpButtonContainer>
            <SignUpButton variant="contained" color="primary" type="submit">
              Sign Up
            </SignUpButton>
          </SignUpButtonContainer>
        </FormContainer>
        <GuideTypography data-aos="fade-right" data-aos-delay="500">
          すでにアカウントをお持ちの方は
          <GuideToLoginButton onClick={() => navigate('/login')}>
            こちら
          </GuideToLoginButton>
        </GuideTypography>
      </TopContainer>
    </>
=======
    <div>
      <h1>ユーザ登録</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />
        </div>
        <div>
          <button>登録</button>
        </div>
        <div>
          ユーザ登録済の場合は<Link to={'/login'}>こちら</Link>から
        </div>
      </form>
    </div>
>>>>>>> 375a2f060ee84edfe0828c7821378d392cd22080
  )
}
