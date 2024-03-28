'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import contact_flower_img_1 from '@/public/img/contact/contact-flower.png'
import contact_flower_img_2 from '@/public/img/contact/contact-flower-text.png'
import ContactForm from '../ContactForm'

interface DataType {
  subtitle: string
  title_1: string
  email: string
  mail_text: React.JSX.Element
  categorys: {
    id: string
    title: string
  }[]
}

const contact_content: DataType = {
  subtitle: 'Contact',
  title_1: 'keep in touch with me',
  email: 'xiaosong.dev@gmail.com',
  mail_text: (
    <>
      Interested in my information and want to contact me? <br /> Send me a
      email or use the form below to leave me a message.
    </>
  ),
  categorys: [
    { id: 'branding', title: 'Branding' },
    { id: 'web_design', title: 'Web Design' },
    { id: 'app_design', title: 'App Design' },
    { id: 'logo', title: 'Logo' },
    { id: 'digital_marketing', title: 'Digital Marketing' },
    { id: 'android_development', title: 'Android Development' },
    { id: 'iso_development', title: 'iOS Development' },
    { id: 'design_concept', title: 'Design Concept' },
    { id: 'other', title: 'Other' },
  ],
}

const { subtitle, title_1, email, mail_text, categorys } = contact_content

const ContactArea = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([2, 5])
  // Function to toggle the selection of a category
  const toggleSelection = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(
        selectedCategories.filter((categoryId) => categoryId !== id)
      )
    } else {
      setSelectedCategories([...selectedCategories, id])
    }
  }

  return (
    <>
      <div className='contact-inner__area contact-inner__ptb p-relative black-bg-3'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-11 offset-xl-1'>
              <div className='row align-items-center'>
                <div className='col-xl-9 col-lg-10'>
                  <div className='contact-inner__top-section-title-box mb-70'>
                    <span className='contact-inner__subtitle'>{subtitle}</span>
                    <h4 className='contact-inner__title tp-char-animation tp-hero-3__content'>
                      {title_1} <span></span> <br />
                    </h4>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-2 d-none d-sm-block text-end'>
                  <div className='contact-inner__shape-1 text-center text-lg-end'>
                    <Image
                      className='flower-img'
                      src={contact_flower_img_1}
                      alt='image-here'
                    />
                    <Image
                      className='flower-text'
                      src={contact_flower_img_2}
                      alt='image-here'
                    />
                  </div>
                </div>
              </div>
              <div className='contact-inner__mail-box mb-90'>
                <div className='row'>
                  <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='contact-inner__mail-info'>
                      <span>Email Me:</span>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6'>
                    <div className='contact-inner__mail-text'>
                      <p>{mail_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactArea
