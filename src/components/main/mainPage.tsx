import React, {useEffect, useState} from "react";
import HeaderComp from "../header/headerComp";
import FooterComp from "../footer/footerComp";

import "./mainPage.scss";

const MainPage: React.FC <{
    isConnected: boolean,
    setIsConnected: (arg0: boolean) => void
}> = ({
    isConnected,
    setIsConnected
}) => {
    const [provider, setProvider] = useState <any>();

    useEffect(() => {
        function chainChangesHandler(){
            if (window.ethereum.chainId !== '0x5'){
                localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
                setIsConnected(false);
            }
        }
    
        function accountChangesHandler(){
            localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
            setIsConnected(false);
        }
        if(provider){
            provider.on('chainChanged', chainChangesHandler);
            provider.on('accountsChanged', accountChangesHandler);
            provider.on("disconnect", () => {
                disconnect();
            });
        }

        if(provider){
            return() => {
                provider.removeListener('chainChanged', chainChangesHandler);
                provider.removeListener('accountsChanged', accountChangesHandler);
            }
        }
    }, [isConnected]);

    async function disconnect() {
        localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER');
        setIsConnected(false);
        if (localStorage.getItem('walletconnect')){
            provider.disconnect();
        }
    }


    return(
        <div className="mainPage">
            <HeaderComp
                isConnected = {isConnected}
                disconnect = {disconnect}
                setProvider = {setProvider}
                setIsConnected = {setIsConnected}
            />
            <FooterComp />
        </div>
    );
} 

export default MainPage;