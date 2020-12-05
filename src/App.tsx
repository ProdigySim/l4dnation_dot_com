import React from 'react';
import logo from './images/logo_normal.png';
import discordLogo from './images/discord_transparent_cropped.png';
import cedapugLogo from './images/cedapug_logo.png';
import rbtLogo from './images/rbtv_bigbanner.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="discord_shout">
        <p>L4DNation is a Left 4 Dead and Left 4 Dead 2 focused Discord Community!</p>
        <div>
          <Link href="https://discord.gg/X9YS6Fs">
            <img src={discordLogo} className="discord-logo" alt="discord" />
          </Link>
        </div>
        <Link href="https://discord.gg/X9YS6Fs">
          Click here to join the L4DNation Discord!
        </Link>
      </div>
      <div className="spacer-v16"/>
      <h1>Looking for Competitive L4D2?</h1>
      <p>Competitive L4D2 is still alive! Check out these links!</p>
      <div className="comp-links-grid">
        <div className="complink">
          <div>
            <div className="logo-link">
              <Link className="logo-link" href="https://cedapug.com">
                <img src={cedapugLogo} className="cedapug-logo" alt="CEDAPUG" />
              </Link>
            </div>
            <p><Link href="https://cedapug.com">CEDAPUG</Link> has automated L4D2 Pick-Up-Games, now with ranks!</p>
          </div>
        </div>
        <div className="complink">
          <div>
            <div className="logo-link">
              <Link href="https://steamcommunity.com/groups/rbtvl4d2">
                <img src={rbtLogo} className="rbtv-logo" alt="The Really Big Tournament V" />
              </Link>
            </div>
            <p>The RBTV tournament is coming! Visit their <Link href="https://steamcommunity.com/groups/rbtvl4d2">Steam Group</Link> and <Link href="https://discord.gg/cZf3Y72pxt">Discord</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Link = (p: React.PropsWithChildren<{ className?: string; href: string }>) => (
  <a href={p.href} className={p.className} target="_blank" rel="noreferrer noopener">{p.children}</a>
);

export default App;
