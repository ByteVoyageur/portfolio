import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

// Assuming blog images will be reused for simplicity
import project_img_1 from '@/public/img/projets/pizza.xiaosong.fr_.png'
import project_img_2 from '@/public/img/projets/banque.xiaosong.fr_.png'
import project_img_3 from '@/public/img/projets/xiaosong.fr_.png'
import project_img_4 from '@/public/img/projets/xiaosong.fr_ohmyfood_.png'
import project_img_5 from '@/public/img/projets/xiaosong.fr_booki_.png'
import project_img_6 from '@/public/img/projets/kasa.xiaosong.fr_.png'
import project_img_7 from '@/public/img/projets/projet-3.png'

interface ProjectType {
  img: StaticImageData | any
  date: string
  title: string
  category: string[]
}

const projects: ProjectType[] = [
  {
    img: project_img_1,
    date: 'October 10, 2023',
    title: 'Project 1 Title',
    category: ['React', 'Javascript'],
  },
  {
    img: project_img_2,
    date: 'June 12, 2023',
    title: 'Project 2 Title',
    category: ['React'],
  },
  {
    img: project_img_3,
    date: 'May 21, 2023',
    title: 'Project 3 Title',
    category: ['React', 'Next.js', 'TypeScript', 'Angular', 'Javascript'],
  },
  {
    img: project_img_4,
    date: 'October 10, 2023',
    title: 'Project 4 Title',
    category: ['Next.js', 'TypeScript'],
  },
  {
    img: project_img_5,
    date: 'June 12, 2023',
    title: 'Project 5 Title',
    category: ['Next.js'],
  },
  {
    img: project_img_6,
    date: 'May 21, 2023',
    title: 'Project 6 Title',
    category: ['Angular'],
  },
  {
    img: project_img_7,
    date: 'October 10, 2023',
    title: 'Project 7 Title',
    category: [
      'JavaScript',
      'React',
      'Redux',
      'Next.js',
      'TypeScript',
      'Angular',
    ],
  },
]

const categoryButtons = [
  'Javascript',
  'React',
  'Next.js',
  'TypeScript',
  'Angular',
]

const ProjectDisplay = ({ style }: any) => {
  const [activeCategory, setActiveCategory] = useState('')
  const activeRef = useRef<HTMLButtonElement>(null)
  const marker = useRef<HTMLSpanElement>(null)

  // Filter projects by category
  const filteredProjects = activeCategory
    ? projects.filter((project) => project.category.includes(activeCategory))
    : projects

  // handleActiveCategory
  const handleActiveCategory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    category: string
  ) => {
    setActiveCategory(category)
    const buttonElement = e.target as HTMLButtonElement
    if (marker.current) {
      marker.current.style.left = buttonElement.offsetLeft + 'px'
      marker.current.style.width = buttonElement.offsetWidth + 'px'
    }
  }

  useEffect(() => {
    if (activeCategory && activeRef.current && marker.current) {
      marker.current.style.left = activeRef.current.offsetLeft + 'px'
      marker.current.style.width = activeRef.current.offsetWidth + 'px'
    }
  }, [activeCategory])

  return (
    <>
      <section
        className={`${
          style
            ? 'sv-inner__price-area sv-inner__price-customize black-bg-3'
            : 'tp-pcb-area pt-80'
        } pb-70`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div
                className={`tp-pcb-tab blog-btn-tab d-flex justify-content-center mb-80`}
              >
                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                  {categoryButtons.map((category, index) => (
                    <li key={index} className='nav-items' role='presentation'>
                      <button
                        className={`nav-links ${
                          activeCategory === category ? 'active' : ''
                        }`}
                        id={`${category}-tab`}
                        type='button'
                        role='tab'
                        onClick={(e) => handleActiveCategory(e, category)}
                        aria-selected={
                          activeCategory === category ? 'true' : 'false'
                        }
                        tabIndex={-1}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
                <span ref={marker} id='blog-btn-bg'></span>
              </div>
            </div>
          </div>
          <div className='row gx-4 gy-4'>
            {filteredProjects.map((project, index) => (
              <div key={index} className='col-12 col-md-6 col-lg-4 mb-4'>
                <div className='tp-blog-item h-100'>
                  <div
                    className='image-container'
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '56.25%',
                      overflow: 'hidden',
                    }}
                  >
                    <Link href='/project-details' passHref>
                      <Image
                        className='project-display-img'
                        src={project.img}
                        alt='project-image'
                        layout='fill'
                        objectFit='cover'
                      />
                    </Link>
                  </div>
                  <div className='tp-blog-content'>
                    <h4 className='tp-blog-title-sm'>
                      <Link href='/project-details'>{project.title}</Link>
                    </h4>
                    <div className='tp-blog-meta d-flex justify-content-between align-items-center'>
                      <span>{project.date}</span>
                      <span>{project.category.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectDisplay
