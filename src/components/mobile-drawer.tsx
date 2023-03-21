import * as React from 'react'

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import { FaBars, FaTimes } from 'react-icons/fa'

import NextLink from 'next/link'
import { useSocials } from '@/hooks/app'
import siteConfig from '~/site-config'

export const MobileDrawer: React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef()

  const socials = useSocials()

  return (
    <>
      <Box bottom={0} d={{ md: 'none' }} p={5} pos="fixed" right={0} zIndex={1}>
        <IconButton
          aria-label="Open menu"
          bgColor={siteConfig.themeColor}
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
        />
      </Box>

      <Drawer finalFocusRef={btnRef} isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader p={8}>
              <NextLink href="/">
                <Link href="/" onClick={onClose} variant="link">
            Fuel-Wallet
                </Link>
              </NextLink>
            </DrawerHeader>

            <DrawerFooter justifyContent="flex-start" px={4} py={8}>
              
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
