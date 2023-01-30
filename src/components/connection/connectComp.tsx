import React, {useState, useEffect} from "react";
import web3modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import './connectComp.scss';

declare const window: Window;

const ConnectComp: React.FC <{
    setProvider: (arg0: any) => void, 
    setIsConnected: (arg0: boolean) => void,
    setClientAddr: (arg0: string) => void
}> = ({
    setProvider, 
    setIsConnected,
    setClientAddr
}) =>{
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER')){
            setIsReload(true);
            connect();
        }
    }, [])

    async function connect() {
            
        const providerOptions = {  
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    rpc: {
                        5: 'https://goerli.infura.io/v3/',
                    },
                    network: 'goerli'
                },
            }
        };

        const Web3Modal = new web3modal({
            network: "mainnet",
            cacheProvider: true, 
            providerOptions,
        });
        const provider = await Web3Modal.connect();
        setProvider(await Web3Modal.connect());

        if (provider.isMetaMask){
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: '0x5'}]
                });

            } catch (error: any) {
                if (error.code === -32002){
                    return;
                }

                if (error.code === 4001) {  // User rejected the request
                    return;
                }

                if (error.code === 4902) {  // Unrecognized chain ID
                    try {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: '0x5',
                                chainName: 'testnetG',
                                nativeCurrency: {
                                    name: 'GoerliETH',
                                    symbol: 'ETH',
                                    decimals: 18
                                },
                                rpcUrls: ['https://goerli.infura.io/v3/'],
                                blockExplorerUrls: ['https://goerli.etherscan.io']
                            }],
                        })    
                    } catch (err) {
                        console.error(err);
                    }
                    
                } 
            }
        }
        
        const web3 = new Web3(await Web3Modal.connect());
        
        if (await web3.eth.getAccounts() !== []){
            const clientAddr1 =  await web3.eth.getAccounts();
            const clientAddrState = clientAddr1[0];
            setClientAddr(clientAddrState);
            setIsConnected(true);
            return;
        } 
    }

    if(!isReload){
        return(
            <div className="connectComp">
                <div className="connectBtn" onClick={() => connect()}>
                    Connect Wallet
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}

export default ConnectComp;