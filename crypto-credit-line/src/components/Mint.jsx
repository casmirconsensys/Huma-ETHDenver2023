import React from 'react'

function Mint() {
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
        </form>
        </div>
    </div>
  )
}

export default Mint