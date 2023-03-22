import * as React from 'react'

import { HStack, Icon, IconButton, Link, useColorMode } from '@chakra-ui/react'

import { FaMoon } from 'react-icons/fa'
import NextLink from 'next/link'
import { useSocials } from '@/hooks/app'
import siteConfig from '~/site-config'
import ConnectWallet from './connectWallet'

export const Navbar: React.FC = () => {
  const { toggleColorMode } = useColorMode()
  const socials = useSocials()

  return (
    <HStack as="nav" fontSize="md" p={4} spacing={0}>
      <NextLink href="/">
        <Link fontWeight="bold" href="/" p={4} variant="link">
        Wallet
        </Link>
      
      </NextLink>


      <Link fontWeight="bold" href="/contract" p={4} variant="link">Contract</Link>
      <HStack flexGrow={1} justify="flex-end" p={4} spacing={{ base: 6, sm: 2 }}>
        <ConnectWallet/>
        <IconButton
          aria-label="toggle dark mode"
          color="currentColor"
          icon={<Icon as={FaMoon} boxSize={5} />}
          onClick={toggleColorMode}
          variant="link"
        />
      </HStack>
    </HStack>
  )
}
