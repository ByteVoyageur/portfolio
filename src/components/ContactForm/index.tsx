'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

const schema = yup
  .object({
    name: yup.string().required().label('Name'),
    email: yup.string().required().email().label('Email'),
    company: yup.string().required().label('Company'),
    message: yup.string().required().label('Message'),
  })
  .required()

const ContactForm = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isFocused2, setIsFocused2] = useState<boolean>(false)
  const [isFocused3, setIsFocused3] = useState<boolean>(false)
  const [isFocused4, setIsFocused4] = useState<boolean>(false)
  const [activeCategory, setActiveCategory] = useState<number | null>(1)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const responseData = await response.json()

      if (response.ok) {
        toast('Message sent successfully')
        console.log('Server Response:', responseData)
        reset() // Reset form fields
      } else {
        // Handle server errors or invalid responses
        toast('Failed to send message. Please try again.')
        console.error('Server Error:', responseData)
      }
    } catch (error) {
      // Handle network errors
      console.error('Network Error:', error)
      toast('Network error. Please try again.')
    }

    // Reset focus states
    setIsFocused(false)
    setIsFocused2(false)
    setIsFocused3(false)
    setIsFocused4(false)
  }

  // handle focus and blur events

  const handleFocus = () => {
    setIsFocused(true)
  }
  const handleFocus2 = () => {
    setIsFocused2(true)
  }
  const handleFocus3 = () => {
    setIsFocused3(true)
  }
  const handleFocus4 = () => {
    setIsFocused4(true)
  }

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value === '') {
      setIsFocused(false)
    }
  }
  const handleBlur2 = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value === '') {
      setIsFocused2(false)
    }
  }
  const handleBlur3 = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value === '') {
      setIsFocused3(false)
    }
  }
  const handleBlur4 = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value === '') {
      setIsFocused4(false)
    }
  }

  const handleItemClick = (index: number) => {
    setActiveCategory(index)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='contact-inner__wrapper'>
          <div className='postbox__comment-form'>
            <div className='row gx-20'>
              <div className='col-xxl-6 col-xl-6 col-lg-6'>
                <div className='postbox__comment-input mb-35'>
                  <label
                    htmlFor='name'
                    className='visually-hidden-contact-form'
                  >
                    Your Name
                  </label>
                  <input
                    id='name'
                    type='text'
                    className='inputText'
                    {...register('name')}
                    aria-label='Your Name'
                  />
                  <p className='form_error'>{errors.name?.message}</p>
                </div>
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6'>
                <div className='postbox__comment-input mb-35'>
                  <label
                    htmlFor='company'
                    className='visually-hidden-contact-form'
                  >
                    Company
                  </label>
                  <input
                    id='company'
                    type='text'
                    className='inputText'
                    {...register('company')}
                    aria-label='Company'
                  />
                  <p className='form_error'>{errors.company?.message}</p>
                </div>
              </div>
              <div className='col-xxl-12'>
                <div className='postbox__comment-input mb-35'>
                  <label
                    htmlFor='email'
                    className='visually-hidden-contact-form'
                  >
                    Your Email
                  </label>
                  <input
                    id='email'
                    type='text'
                    className='inputText'
                    {...register('email')}
                    aria-label='Your Email'
                  />
                  <p className='form_error'>{errors.email?.message}</p>
                </div>
              </div>
              <div className='col-xxl-12'>
                <div className='postbox__comment-input mb-20'>
                  <label
                    htmlFor='message'
                    className='visually-hidden-contact-form'
                  >
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    className='textareaText'
                    {...register('message')}
                    aria-label='Your Message'
                  ></textarea>
                  <p className='form_error'>{errors.message?.message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xxl-12'>
              <div className='postbox__comment-btn'>
                <button type='submit' className='tp-btn-grey-lg'>
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm
