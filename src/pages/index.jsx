import Head from "next/head";
import Image from "next/image";

import GlobalStyle from "../styles/Global";

import * as Style from "../styles/style";

import { Fade } from "react-awesome-reveal";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />
      </Head>
      <GlobalStyle />
      <Style.Header>
        <nav>
          <AiOutlineSearch size={25}/>
          <ul>
            <li><AiOutlineSearch size={25}/></li>
            <li>Home</li>
            <li>Market</li>
            <li>Community</li>
          </ul>
        </nav>
      </Style.Header>
      <Style.Main>
        <Style.ContentPrincipal>
          <div className="cicle1"></div>
          <div className="cicle2"></div>
          <div className="cicle3"></div>
          <img className="fundoImg" src="/bg.png" alt="" />
          <Fade top delay={1000} cascade>
            <section className="text">
              <h1>
                <strong>Descubra</strong> ,Colecione e venda NFTs
              </h1>

              <p>Explore no melhor mercado NFT do mundo</p>
              <button>Explorar</button>
            </section>
          </Fade>
          <Fade bottom delay={2000}>
            <section className="image">
              <div className="informacoes">
                <div>
                  <h3>26K+</h3>
                  <p>Artwork</p>
                </div>
                <div>
                  <h3>18K+</h3>
                  <p>Auction</p>
                </div>
                <div>
                  <h3>8K+</h3>
                  <p>Artist</p>
                </div>
              </div>

              <img src="/nft3.png" alt="" />
            </section>
          </Fade>
        </Style.ContentPrincipal>
      </Style.Main>
    </>
  );
}