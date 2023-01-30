import React, {useState} from "react";
import ConnectComp from "../connection/connectComp";

import "./headerComp.scss";

const HeaderComp: React.FC <{
    isConnected: boolean,
    disconnect: () => void,
    setProvider: (provider: any) => void,
    setIsConnected: (arg0: boolean) => void
}> =({
    isConnected,
    disconnect,
    setProvider,
    setIsConnected
}) => {
    const [clientAddr, setClientAddr] = useState('');
    return(
        <div className="header">
            <div className="test"></div>
            <div className="headerLogo">
                <img src="./images/logo.png" alt="logo" />
            </div>
            <div className="headerAccWrapper">
                {isConnected ?
                    <div className="headerConnected" onClick={() => disconnect()}>
                        <img src="./images/mm_logo.png" alt="metamask" />
                        <div className="headerAcc">{clientAddr.slice(0,10) + '...' + clientAddr.slice(-4)}</div>
                        <img src="./images/disconnect.png" alt="disconnnect" />
                    </div>
                :
                    <ConnectComp
                        setProvider = {setProvider}
                        setIsConnected = {setIsConnected}
                        setClientAddr = {setClientAddr}
                    />
                }
            </div>

        </div>
    )
}

export default HeaderComp;