import React, { useState } from "react";
import { Cluster, Keypair } from "@solana/web3.js";
import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalContext } from "../context";
import Layout from '../components/Layout';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const [network, setNetwork] = useState<Cluster | undefined>("devnet");
  const [account, setAccount] = useState<Keypair | null>(null);
  const [mnemonic, setMnemonic] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

  return (
    <GlobalContext.Provider value={{ network, setNetwork, account, setAccount, mnemonic, setMnemonic, balance, setBalance }}>
      <Layout>
        <div>props</div>
      </Layout>
    </GlobalContext.Provider>
  )
}