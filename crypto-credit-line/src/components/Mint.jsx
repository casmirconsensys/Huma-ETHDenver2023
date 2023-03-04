import React, {useState} from 'react'
import { TransactionService } from '@liquality/wallet-sdk'
import { MintERC721Request } from '@liquality/wallet-sdk/dist/src/nft/types'
import {getPrivateKey} from "../utils";

function Mint(props) {
    const {onSubmit, transactionHash} = props

    const [chainId, setChainId] = useState("")
    const [contractAddress, setContractAddress] = useState("")
    const [recipient, setRecipient] = useState("")
    const [uri, setUri] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({contractAddress, recipient, uri}, +chainId, getPrivateKey())
    }

  return (
    <div>
        <div>
        <a href="https://docs.liquality.io/functions/auth#create-a-wallet"
          target="_blank"
          rel="noreferrer"
        >
            <h5> Mint ERC721 NFT</h5>
        </a>
        <p>You can mint ERC721 NFT. Just fill the form and the transaction hash will be displayed</p>

        <form action="#">
            <div>
                <label htmlFor=""> Your ChainID</label>
                <input type="number" placeholder='Type chainID here...' required />
            </div>
            <div>
                <label htmlFor="">Token Address</label>
                <input type="text" placeholder='Paste token address' required/>
            </div>
            <div>
                <label htmlFor="">Recipient Address</label>
                <input type="text" placeholder='Paste recipient wallet address...' required/>
            </div>
            <div>
                <label htmlFor="">URI</label>
                <input type="text" placeholder='Pase token uri' required/>
            </div>

            <button type='submit'>Mint NFT</button>

            <div>
                <div>
                    <label htmlFor="">{/* !TransactionHash && 'Transaction Hash will be displayed here' */}</label>
                    <button>Check Status</button>
                </div>
            </div>
            
        </form>
        </div>
    </div>
  )
}

export default Mint