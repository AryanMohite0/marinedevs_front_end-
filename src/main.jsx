import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function CaptainLogin() {
  return <aside className="captain-card" aria-label="Captain login">
    <div className="card-rim" />
    <p className="compass">◉&nbsp;THE INDIAN OCEAN / BAY OF BENGAL&nbsp;◉</p>
    <p className="kicker">SIDE SONAR SCAN </p>
    <h1>Enter the deep.</h1>
    <p className="hint">Debugg Depth Conspiracies.</p>
    <form onSubmit={(event) => event.preventDefault()}>
      <label>USERNAME<input placeholder="your ship's name" autoComplete="username" /></label>
      <label>PASSWORD<input type="password" placeholder="••••••••" autoComplete="current-password" /></label>
      <button type="submit">SET SAIL <span>⚓</span></button>
    </form>
    <p className="map-mark">SIGNAL STRENGTH · ▰ ▰ ▰ ▱</p>
  </aside>
}

function App() {
  return <main className="page">
    <video className="ocean-video" autoPlay muted loop playsInline poster="/ghost-ship-reference.png">
      <source src="/storm-ocean.mp4" type="video/mp4" />
    </video>
    <div className="ocean-grade" />
    <div className="grain" /><div className="crt" />
    <header><span className="mark">MG</span><strong>MARINE GUARD</strong><em>ABYSSAL OBSERVATORY</em><span className="live">● LIVE FEED</span></header>
    <section className="story" aria-labelledby="title"><p>NOIT & MoES · Atma Nirbhar Bharat
</p><h2 id="title">Where the<br /><i>light ends.</i></h2><span className="rule">⌁ &nbsp; ----DEEP SEA ARCHIVE</span></section>
    <CaptainLogin />
    <aside className="depth-gauge" aria-hidden="true"><span>0m</span><i /><span>500m</span><i /><span>1000m</span><i /></aside>
    <footer>SONAR // 18° 43′ N, 69° 08′ W &nbsp;&nbsp;·&nbsp;&nbsp; DEPTH : 3842M &nbsp;&nbsp;·&nbsp;&nbsp; WATER TEMP : 3.8°C</footer>
    <style>{`
      .ocean-video { filter: saturate(.46) contrast(1.2) brightness(.42) sepia(.14) hue-rotate(126deg); transform: scale(1.025); }
      .ocean-grade { background: radial-gradient(ellipse at 18% 45%, transparent 0 10%, #001014a8 49%, #010506ed 100%), linear-gradient(90deg, #010405c7, #04131642 55%, #01050594), linear-gradient(0deg, #010506cf, transparent 62%); }
      .grain { opacity:.29; background-image: linear-gradient(#d9d49b17 1px, transparent 1px), linear-gradient(90deg, #d9d49b12 1px, transparent 1px); background-size:3px 3px; mix-blend-mode:screen; }
      .crt { position:absolute; inset:0; z-index:0; pointer-events:none; opacity:.24; background: repeating-linear-gradient(0deg, transparent 0 3px, #000 3px 4px); mix-blend-mode:multiply; }
      header { top:22px; padding-bottom:14px; border-bottom:1px solid #9b956642; width:min(790px, calc(100% - 44px)); color:#cec386; font-size:17px; }
      header em { color:#788c7b; letter-spacing:3px; font-size:16px; } .mark { border-color:#979061; color:#d1c782; }
      .live { margin-left:auto; color:#8da88d; font-size:14px; letter-spacing:1px; } .live::first-letter { color:#b5745e; }
      .story { top:33%; } .story p,.kicker { color:#9d9c6c; font-size:15px; } .story h2 { color:#d7d0ac; text-shadow:3px 3px #000; } .story h2 i { color:#6b9b96; } .rule { color:#938c5e; font-size:16px; letter-spacing:2px; }
      .captain-card { border-color:#7f8565; background:linear-gradient(140deg,#071a1ad9,#02090ae8); box-shadow:0 0 0 5px #061112c4, 0 20px 70px #000d, inset 0 0 55px #34645b21; }
      .card-rim { border-color:#87916c73; }.compass { color:#859575; font-size:14px; letter-spacing:2px; }.captain-card h1 { color:#d3c47e; font-family:'IM Fell English SC',serif; font-size:35px; text-shadow:2px 2px #000; }.hint { color:#819e94; }.captain-card label { color:#acac7d; } input { border-color:#536b62; background:#010607ef; color:#b9d6c9; } input:focus { border-color:#b2aa70; } button { border-color:#89835e; background:linear-gradient(110deg,#363c2a,#696641); box-shadow:inset 0 0 0 2px #1d2017; color:#ded49b; } button:hover { background:#7b7650; }.map-mark { color:#6c968d; }
      .depth-gauge { position:absolute; z-index:1; left:clamp(22px,5vw,72px); top:50%; display:grid; gap:8px; color:#788d82; font-size:12px; letter-spacing:1px; transform:translateY(-12%); }.depth-gauge i { display:block; width:58px; height:1px; background:#788d8266; }.depth-gauge b { color:#b6ad72; font-weight:400; }.depth-gauge b::before { content:''; display:inline-block; width:29px; height:1px; background:#b6ad72; vertical-align:middle; margin-right:7px; }
      footer { color:#718c82; font-size:14px; border-top:1px solid #7f85663a; padding-top:10px; width:min(810px, calc(100% - 44px)); }
      @media(max-width:760px){.live,.depth-gauge{display:none}.story{top:21%}.captain-card{bottom:45px}.ocean-video{object-position:58% center}header{width:calc(100% - 40px)}}
    `}</style>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
