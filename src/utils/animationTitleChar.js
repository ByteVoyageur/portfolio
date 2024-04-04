import { gsap } from 'gsap'
import { SplitText } from '@/src/plugins'

const animationTitleChar = () => {
  const char = document.querySelector('.tp-char-animation')
  // check if window is defined
  if (typeof window !== 'undefined') {
    if (char) {
      // get all elements to a array
      let char_come = gsap.utils.toArray('.tp-char-animation')
      // loop through all elements
      char_come.forEach((splitTextLine) => {
        // create a timeline for each element
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine, // element to trigger
            start: 'top 90%', // when the element is 90% in the viewport start the animation
            end: 'bottom 60%', // when the element is 60% out of the viewport end the animation
            scrub: false, // do not change the animation while scrolling
            markers: false, // do not show markers
            toggleActions: 'play none none none', // play the animation once
          },
        })

        // use SplitText to split the text into chars
        const itemSplitted = new SplitText(splitTextLine, {
          type: 'chars, words',
        })
        // set the perspectiv, this is the distance from the user to the element, to create a 3D effect
        gsap.set(splitTextLine, { perspective: 300 })
        // split the text again, this time into chars
        itemSplitted.split({ type: 'chars, words' })

        // animate the chars, move them from the right to the left and fade them in
        tl.from(itemSplitted.chars, {
          duration: 1, // duration of the animation
          delay: 0.5, // delay before the animation starts
          x: 100, // move the chars 100px to the right
          autoAlpha: 0, // begin with an opacity of 0
          stagger: 0.05, // every char is animated with a delay of 0.05s
        })
      })
    }
  }
}

export default animationTitleChar
