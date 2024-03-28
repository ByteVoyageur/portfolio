import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'

// Assuming blog images will be reused for simplicity
import project_img_1 from '@/public/img/blog/blog-1.jpg'
import project_img_2 from '@/public/img/blog/blog-2.jpg'
import project_img_3 from '@/public/img/blog/blog-3.jpg'

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
    img: project_img_1,
    date: 'October 10, 2023',
    title: 'Project 4 Title',
    category: ['Next.js', 'TypeScript'],
  },
  {
    img: project_img_2,
    date: 'June 12, 2023',
    title: 'Project 5 Title',
    category: ['Next.js'],
  },
  {
    img: project_img_3,
    date: 'May 21, 2023',
    title: 'Project 6 Title',
    category: ['Angular'],
  },
  {
    img: project_img_1,
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
  {
    img: project_img_2,
    date: 'June 12, 2023',
    title: 'Project 8 Title',
    category: ['Javascript', 'TypeScript'],
  },
  {
    img: project_img_3,
    date: 'May 21, 2023',
    title: 'Project 9 Title',
    category: ['React', 'Next.js'],
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
          <div className='row gx-45'>
            {filteredProjects.map((project, index) => (
              <div key={index} className='col-xl-4 col-lg-4 mb-70'>
                <div className='tp-blog-item'>
                  <div className='tp-blog-thumb fix'>
                    <Link href='/project-details'>
                      <Image
                        className='w-100'
                        src={project.img}
                        alt='project-image'
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
