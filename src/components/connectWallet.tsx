
import { Button, Text, useColorModeValue } from '@chakra-ui/react'

import { useEffect, useState } from 'react'
declare global {
  interface Window {
    fuel?: any;
  }
}
const ConnectWallet = () => {
    const [connected, setConnected] = useState<boolean>(false);
    const [account, setAccount] = useState<string>("");
    const [isLoadingTx, setIsLoadingTx] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          checkConnection();
          setIsLoadingTx(false);
        }, 200);
       
      }, [account, connected]);
    
      async function connect() {
        if (window.fuel) {
          try {
            await window.fuel.connect();
            const accounts = await window.fuel.accounts();
            setAccount(accounts[0]);
            console.log("accountbalance: ", accounts[0].balance);
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
        <Button
        
            onClick={connected ? disconnect : connect}
            isLoading={isLoadingTx}

          style={
            !connected ? { 
                backgroundColor: "transparent",
                borderColor:"linear-gradient(90deg, #F60603, #D5FD0A)",
                backgroundSize: "200% 100%",
                backgroundPosition: "right bottom",
                transition: "all 0.4s ease-in-out",
                border: "1px solid #00ff00",
            } : { 
                backgroundColor: "transparent",
                borderColor:"linear-gradient(90deg, #F60603, #D5FD0A)",           
                backgroundSize: "200% 100%",
                backgroundPosition: "right bottom",
                transition: "all 0.4s ease-in-out",
                border: "1px solid #00ff00",           
             }
          }
        >
           {
            !connected ? (
                <Text
                style={{
                    color: useColorModeValue("black", "white"),
                }}
                >Connect Wallet</Text>
            ):(
                <Text
                style={{
                    color: useColorModeValue("black", "white"),
                }}
                >{
                    account.slice(0, 6) + "..." + account.slice(-4)

                    }</Text>
            )
           }
        </Button>
  )
}

export default ConnectWallet