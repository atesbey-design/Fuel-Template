import { useEffect, useState } from 'react';
import { Button, Center, Text } from '@chakra-ui/react';
import { CounterContractAbi__factory } from "../contracts/index";
import { Wallet } from "fuels";



// The address of the contract deployed the Fuel testnet
const CONTRACT_ID =
  "0x2c38161e42ce14abdaa7950c04b13aa340eb67cf196c94b971d5f0175417f4f4";

//the private key from createWallet.js
const WALLET_SECRET =
  "0x07960a5124cd6e52b595aed727d640aed2e32cc587a34c09f1b48615378df752";

// Create a Wallet from given secretKey in this case
// The one we configured at the chainConfig.json
const wallet = Wallet.fromPrivateKey(
  WALLET_SECRET,
  "https://beta-3.fuel.network/graphql"
);

const contract = CounterContractAbi__factory.connect(CONTRACT_ID, wallet);
const Contract = () => {
    const [counter, setCounter] = useState(0);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      async function main() {
        // Executes the counter function to query the current contract state
        // the `.get()` is read-only, because of this it don't expand coins.
        const { value } = await contract.functions.count().get();
        setCounter(Number(value));
      }
      main();
    }, []);
  
    async function increment() {
      // a loading state
      setLoading(true);
      // Creates a transactions to call the increment function
      // because it creates a TX and updates the contract state this requires the wallet to have enough coins to cover the costs and also to sign the Transaction
      try {
        await contract.functions.increment().txParams({ gasPrice: 1 }).call();
        const { value } = await contract.functions.count().get();
        setCounter(Number(value));
      } finally {
        setLoading(false);
      }
    }
    return (
      <Center mt={8}>
        <Button  mr={2}>
          -
        </Button>
        <Text fontSize="xl" fontWeight="bold" mr={2}>
          {counter}
        </Text>
        <Button onClick={increment} mr={2}
     
            disabled={loading}
        >
          +
        </Button>
      </Center>
    );
  }

export default Contract