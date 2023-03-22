

import {  Heading, Icon, Stack ,Text} from '@chakra-ui/react'
import {  FaGithub } from 'react-icons/fa'
import { NextSeo } from 'next-seo'
import type { NextPage } from '@/types/next'



const HomePage: NextPage = () => {
 

  return (
    <>
      <NextSeo title='Template' titleTemplate="%s" />
      <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Heading size="2xl">
      Fuel-Wallet

        </Heading>

        <Text>
  <Icon as={FaGithub} />
        </Text>
   
      </Stack>
    </>
  )
}

export default HomePage
