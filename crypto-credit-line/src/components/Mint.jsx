import React, {useState} from 'react'
import './Mint.css'
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
        console.log({contractAddress, recipient, uri})
        // onSubmit({contractAddress, recipient, uri}, +chainId, getPrivateKey())
    }

    const checkStatus = async () => {
        if(transactionHash){
          const status = await TransactionService.getTransactionStatus(transactionHash, +chainId);
          alert(JSON.stringify(status));
        }else{
          alert('You have not initiated any transaction');
        }
      }

  return (
    <div className='mint_container'>
        <div className='mint_div'>
            <a href="https://docs.liquality.io/functions/auth#create-a-wallet"
            target="_blank"
            rel="noreferrer"
            >
                <h5 className='mint_h5'> Mint ERC721 NFT</h5>
            </a>
            <p className='mint_p'>You can mint ERC721 NFT. Just fill the form and the transaction hash will be displayed</p>

            <form className='mint_form' onSubmit={handleSubmit} action="#">
                <div>
                    <label className='mint_form_label' htmlFor=""> Your ChainID</label>
                    <input className='mint_form_input' value={chainId} onChange={(e) => setChainId(e.target.value)} id="ChainID" type="number" placeholder='Type chainID here...' required />
                </div>
                <div>
                    <label className='mint_form_label' htmlFor="">Token Address</label>
                    <input className='mint_form_input' value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} id="address" type="text" placeholder='Paste token address' required/>
                </div>
                <div>
                    <label className='mint_form_label' htmlFor="">Recipient Address</label>
                    <input className='mint_form_input' value={recipient} onChange={(e) => setRecipient(e.target.value)} id="address" type="text" placeholder='Paste recipient wallet address...' required/>
                </div>
                <div>
                    <label className='mint_form_label' htmlFor="">URI</label>
                    <input className='mint_form_input' value={uri} onChange={(e) => setUri(e.target.value)} id="address" type="text" placeholder='Pase token uri' required/>
                </div>

                <button className='mint_btn' type='submit'>Mint NFT</button>

                <div className='mint_check_container'>
                    <div className='mint_check_div'>
                        <label className='mint_check_label' htmlFor="">{ !transactionHash && 'Transaction Hash will be displayed here' } { transactionHash }</label>
                        <button className='mint_btn' onClick={checkStatus} type="button">Check Status</button>
                    </div>
                </div>
                
            </form>
        </div>{" "}
    </div>
  )
}

export default Mint