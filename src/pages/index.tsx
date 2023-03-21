

import { Button, Heading, Icon, Stack, Wrap, WrapItem,Text} from '@chakra-ui/react'
import { FaCode, FaGithub } from 'react-icons/fa'
import { NextSeo } from 'next-seo'

import siteConfig from '~/site-config'

import type { NextPage } from '@/types/next'
import { useEffect, useState } from 'react'
declare global {
  interface Window {
    fuel?: any;
  }
}

const HomePage: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);
  const [connected, setConnected] = useState<boolean>(false);
  const [account, setAccount] = useState<string>("");
  const [isLoadingTx, setIsLoadingTx] = useState(false);
  const [errorMessage, setErroMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      checkConnection();
      setIsLoadingTx(false);
    }, 200);
    if (connected) {
      setCounter(counter + 1);
      console.log("counter: ", counter);
    }
  }, [account, connected]);

  async function connect() {
    if (window.fuel) {
      try {
        await window.fuel.connect();
        const accounts = await window.fuel.accounts();
        setAccount(accounts[0]);
        setConnected(true);
      } catch (err) {
        console.log("error connecting: ", err);
      }
    }
  }
  async function disconnect() {
    if (window.fuel && window.fuel.isConnected) {
      await window.fuel.disconnect();
      setAccount("");
      setConnected(false);
    }
  }

  async function checkConnection() {
    const isConnected = await window.fuel?.isConnected();
    if (isConnected) {
      const accounts = await window.fuel.accounts();
      setAccount(accounts[0]);
      setConnected(true);
    }
  }

  return (
    <>
      <NextSeo title='Template' titleTemplate="%s" />
      <Stack alignItems="center" px={8} spacing={4} textAlign="center" w="full">
        <Heading size="2xl">
      Fuel-Wallet

        </Heading>

        <Text>
{account}
        </Text>
   
      </Stack>
    </>
  )
}

export default HomePage
