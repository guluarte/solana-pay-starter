import React from 'react'
import { PublicKey } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

// Constants
const TWITTER_HANDLE = '_buildspace'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`

const App = () => {
  // This will fetch the users' public key (wallet address) from any wallet we support
  const { publicKey } = useWallet()

  const renderNotConnectedContainer = () => (
    <div>
      <div>
        <iframe
          allow='fullscreen'
          frameBorder='0'
          height='270'
          src='https://giphy.com/embed/FlJ76bXyXwgWjOJkeJ/video'
          width='480'
        ></iframe>
      </div>

      <div className='button-container'>
        <WalletMultiButton className='cta-button connect-wallet-button' />
      </div>
    </div>
  )

  return (
    <div className='App'>
      <div className='container'>
        <header className='header-container'>
          <p className='header'> 😳 Hale Emoji Store 😈</p>
          <p className='sub-text'>
            The only emoji store that accepts shitcoins
          </p>
        </header>

        <main>
          {/* We only render the connect button if public key doesn't exist */}
          {publicKey ? 'Connected!' : renderNotConnectedContainer()}
        </main>

        <div className='footer-container'>
          <img
            alt='Twitter Logo'
            className='twitter-logo'
            src='twitter-logo.svg'
          />
          <a
            className='footer-text'
            href={TWITTER_LINK}
            target='_blank'
            rel='noreferrer'
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  )
}

export default App
