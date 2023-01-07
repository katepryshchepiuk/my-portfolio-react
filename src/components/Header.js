import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const handleScroll = (e) => {
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos >= prevScrollPos || currentScrollPos === 0) {
        headerRef.current.style.transform = 'translateY(0)'
      } else {
        headerRef.current.style.transform = 'translateY(-100%)'
      }
      setPrevScrollPos(currentScrollPos)      
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={200}
      transitionProperty='transform'
      transitionDuration='0.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      ref={headerRef}
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack
          px={16}
          py={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => {
                return (
                  <a key={index} href={social.url} target='_blank'>
                    <FontAwesomeIcon icon={social.icon} size="1x" />
                  </a>
                )
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={() => handleClick("projects")}>Projects</a>
              <a onClick={() => handleClick("contactme")}>Contact Me</a>
              </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  )
}

export default Header;
