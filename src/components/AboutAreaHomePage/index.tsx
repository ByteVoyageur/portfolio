'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import service_shape_1 from '@/public/img/portfolio/shape-1.png'
import service_shape_2 from '@/public/img/portfolio/shape-2.png'
import service_star_icon from '@/public/img/portfolio/star.png'
import StrategyIcno from '@/src/svg/home-3/StrategyIcno'
import LeadershipIcon from '@/src/svg/home-3/LeadershipIcon'
import DevelopmentIcon from '@/src/svg/home-3/DevelopmentIcon'

interface DataType {
  subtitle: string
  title: React.JSX.Element
  sm_info: React.JSX.Element
  btn_text: React.JSX.Element
  service_data: {
    id: number
    icon: JSX.Element
    title: React.JSX.Element
    sm_des: React.JSX.Element
    tag_1: string
    tag_2: string
  }[]
}

const service_content: DataType = {
  subtitle: 'About Me',
  title: (
    <>
      A Curious Mind <br /> Passionate About Learning
    </>
  ),
  sm_info: (
    <>
      Driven by curiosity, I immerse myself in <br /> learning new technologies
      thinking critically. and
    </>
  ),
  btn_text: (
    <>
      Call me to get more extra service <span>Call Now</span>
    </>
  ),
  service_data: [
    {
      id: 1,
      icon: <StrategyIcno />,
      title: (
        <>
          HTML, CSS <br /> SASS, Bootstrap
        </>
      ),
      sm_des: (
        <>
          Crafting responsive and visually appealing <br /> designs with
          advanced styling techniques.
        </>
      ),
      tag_1: 'Responsive Design',
      tag_2: 'Advanced Styling',
    },
    {
      id: 2,
      icon: <LeadershipIcon />,
      title: (
        <>
          JavaScript, TypeScript <br /> Next.js & React
        </>
      ),
      sm_des: (
        <>
          Building interactive web applications with <br /> modern JavaScript
          frameworks and libraries.
        </>
      ),
      tag_1: 'Interactive Web Apps',
      tag_2: 'Modern Frameworks',
    },
    {
      id: 2,
      icon: <DevelopmentIcon />,
      title: (
        <>
          Git, Linux <br /> AWS, Node.js
        </>
      ),
      sm_des: (
        <>
          Utilizing Git for version control, Linux for system operations, <br />{' '}
          AWS for cloud services, and Node.js for efficient back-end services.
        </>
      ),
      tag_1: 'System Operations & Version Control',
      tag_2: 'Cloud Services & Back-End Efficiency',
    },
  ],
}

const { subtitle, title, sm_info, btn_text, service_data } = service_content

const AboutAreaHomePage = ({ style }: any) => {
  return (
    <>
      <div
        id='aboutMe'
        className={`tp-service-3__area services-panel-area tp-service-3__overlay-bg ${
          style ? 'sv-iiner__customize' : ''
        } black-bg-2 pt-150 pb-125 z-index-1`}
      >
        <div className='tp-service-3__shape-1'>
          <Image src={service_shape_1} alt='image-here' />
        </div>
        <div className='tp-service-3__shape-2 d-none d-lg-block'>
          <Image src={service_shape_2} alt='image-here' />
        </div>
        <div className='tp-service-3__shape-3'>
          <Image data-speed='1.2' src={service_star_icon} alt='image-here' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5 col-lg-5'>
              <div className='tp-service-3__title-box services-panel-pin'>
                <span className='tp-section-subtitle-3 tp_title_anim'>
                  {subtitle}
                </span>
                <h3 className='tp-section-title-3 tp_title_anim'>{title}</h3>
                <p className='tp_title_anim'>{sm_info}</p>
              </div>
            </div>
            <div className='col-xl-7 col-lg-7'>
              <div className='tp-service-3__right-wrap'>
                {service_data.map((item, i) => (
                  <div
                    key={i}
                    className='tp-service-3__item d-flex align-items-start mb-25 services-panel'
                  >
                    <div className='tp-service-3__icon'>
                      <span>{item.icon}</span>
                    </div>
                    <div className='tp-service-3__content'>
                      <h3 className='tp-service-3__content-title'>
                        <Link href='/service-details'>{item.title}</Link>
                      </h3>
                      <p>{item.sm_des}</p>
                      <div className='tp-service-3__content-tag'>
                        <span className='mr-5'>{item.tag_1}</span>
                        <span>{item.tag_2}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutAreaHomePage
