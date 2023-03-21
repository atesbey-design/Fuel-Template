import * as React from 'react'
import { Box, Divider, Flex, HStack, Icon, Link, Stack ,Text, useColorModeValue} from '@chakra-ui/react'
import { useSocials } from '@/hooks/app'

export const Footer: React.FC = () => {
  const socials = useSocials()

  return (
    <Stack as="footer" pb={16} pt={8} spacing={8}>
      <Box px={8}>
        <Divider />
      </Box>
      <Flex alignItems="center" justifyContent={"center"}>
        <Stack spacing={8}>
          <HStack spacing={6}>
        <Text>
          Powered by <span
            style={{
              color: useColorModeValue('blue.500', 'blue.300'),
              fontWeight: 600,
              fontSize: '1.2rem',

            }}

          
         >
            Ates.eth
          </span>
        </Text>
          </HStack>
        </Stack>
      </Flex>
    </Stack>
  )
}
