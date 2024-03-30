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
import project_img_8 from '@/public/img/projets/print-it.png'
import project_img_9 from '@/public/img/projets/sophie-bluel.png'

interface ProjectType {
  img: StaticImageData | any
  date: string
  title: string
  category: string[]
  link: string
}

const projects: ProjectType[] = [
  {
    img: project_img_1,
    date: 'October 10, 2023',
    title: 'Restaurant Italienne',
    category: ['React'],
    link: 'https://pizza.xiaosong.fr',
  },
  {
    img: project_img_2,
    date: 'June 12, 2023',
    title: 'ARENTBANK',
    category: ['React', 'Redux'],
    link: 'https://banque.xiaosong.fr',
  },
  {
    img: project_img_3,
    date: 'May 21, 2023',
    title: 'Portfolio',
    category: ['Next.js', 'TypeScript'],
    link: 'https://xiaosong.fr',
  },
  {
    img: project_img_4,
    date: 'October 10, 2023',
    title: 'Ohmyfood',
    category: ['HTML/CSS'],
    link: 'https://xiaosong.fr/ohmyfood',
  },
  {
    img: project_img_5,
    date: 'June 12, 2023',
    title: 'Booki',
    category: ['HTML/CSS'],
    link: 'https://xiaosong.fr/booki',
  },
  {
    img: project_img_6,
    date: 'May 21, 2023',
    title: 'Kasa immobilière',
    category: ['React'],
    link: 'https://kasa.xiaosong.fr',
  },
  {
    img: project_img_7,
    date: 'October 10, 2023',
    title: 'Wordpress',
    category: ['Wordpress'],
    link: 'https://wordpress.xiaosong.fr',
  },
  {
    img: project_img_8,
    date: 'June 12, 2023',
    title: 'Print it',
    category: ['Javascript'],
    link: 'https://xiaosong.fr/print-it/',
  },
  {
    img: project_img_9,
    date: 'May 21, 2023',
    title: 'Sophie Bluel',
    category: ['Javascript'],
    link: 'https://xiaosong.fr/sophie-bluel/',
  },
]

const categoryButtons = [
  'All',
  'HTML/CSS',
  'Javascript',
  'React',
  'Next.js',
  'TypeScript',
  'Redux',
  'Wordpress',
]

const ProjectDisplay = ({ style }: any) => {
  const [activeCategory, setActiveCategory] = useState('All')
  const activeRef = useRef<HTMLButtonElement>(null)
  const marker = useRef<HTMLSpanElement>(null)

  // Filter projects by category
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category.includes(activeCategory))

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
        <div className='container' id='project-display-area'>
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
                    <Link href={project.link} passHref>
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
