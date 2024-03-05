import { StaticImageData } from 'next/image'

interface DataType {
  id: number
  title: string
  link: string
  img_dropdown?: boolean
  has_dropdown?: boolean
  sub_menus?: {
    link: string
    title: string
    btn_title?: string
    one_page_link?: string | any
    one_page_title?: string
    demo_img?: StaticImageData | any
    mobile_menu?: boolean
  }[]
}
;[]
// menu data
const menu_data: DataType[] = [
  {
    id: 1,
    title: 'Home',
    link: '#home',
    img_dropdown: false,
  },
  {
    id: 2,
    title: 'About Me',
    link: '#aboutMe',
    img_dropdown: false,
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '#projetArea',
    img_dropdown: false,
  },
  {
    id: 4,
    title: 'Contact',
    link: '#contactForm',
    img_dropdown: false,
  },
]

export default menu_data
