import React from 'react'
import ReactDOM from 'react-dom/client' 
import { TwitterCard } from './TwitterCard.jsx'
import './twitter.css'
 
const functionExterna = () => 'Helloo'
const button = <button>Unfollow</button>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <TwitterCard functionExterna={functionExterna} name={'Elizabeth de la Paz'} username={'elizabthpazp'} isFollowing/>
    <TwitterCard trozoCode={button} name={'Twitter'} username={'twitter.com'} isFollowing={false}/>
    <TwitterCard name={'Elon Musk'} username={'elonMusk'} isFollowing={false}/>
    <TwitterCard name={'Instagram'} username={'instagram.com'} isFollowing/>
    <TwitterCard name={'Facebook'} username={'facebook.com'} isFollowing={false}/>
    <TwitterCard name={'Tiktok'} username={'tiktok.com'} isFollowing/>
    <TwitterCard name={'LinkedIn'} username={'linkedin.com'} isFollowing/>
    <TwitterCard name={'Twitch'} username={'twitch.com'} isFollowing={false}/> 
    <TwitterCard name={'Youtube'} username={'youtube.com'} isFollowing/>
    <TwitterCard name={'Reddit'} username={'reddit.com'} isFollowing={false}>
     <div>Seguir</div>
    </TwitterCard>
  </React.StrictMode>,
  
)
