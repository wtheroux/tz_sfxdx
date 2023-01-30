import React from "react";

import "./footerComp.scss";

const FooterComp: React.FC <{}> =({}) => {
    return(
    <div className="footerWrapper">
            <div className="footer">
                <div className="footerPolicy">
                    <div className="footerPolicyItem">Privacy Policy</div>
                    <div className="footerPolicyItem">Terms & Conditions</div>
                    <div className="footerPolicyItem">Cookie Policy</div>
                </div>
                <div className="footerLogo">
                    <img src="./images/logo.png" alt="logo" />
                    <div className="footerCopy">© {new Date().getUTCFullYear()} All Rights Reserved. Powered by Alta</div>
                </div>
                <div className="footerContacts">
                    <div className="footerContactsWrapper">
                        <img src="./images/facebook.png" alt="facebook" />
                        <img src="./images/twitter.png" alt="twitter" />
                        <img src="./images/youtube.png" alt="youtube" />
                        <img src="./images/instagram.png" alt="instagram" />
                    </div>
                </div>
            </div>

            <div className="footerMin">
                <div className="footerLogo">
                    <img src="./images/logo.png" alt="logo" />
                </div>
                <div className="footerPolicy">
                    <div className="footerPolicyItem">Privacy Policy</div>
                    <div className="footerPolicyItem">Terms & Conditions</div>
                    <div className="footerPolicyItem">Cookie Policy</div>
                </div>
                <div className="footerContacts">
                    <div className="footerContactsWrapper">
                        <img src="./images/facebook.png" alt="facebook" />
                        <img src="./images/twitter.png" alt="twitter" />
                        <img src="./images/youtube.png" alt="youtube" />
                        <img src="./images/instagram.png" alt="instagram" />
                    </div>
                </div>
                <div className="footerCopy">© {new Date().getUTCFullYear()} All Rights Reserved. Powered by SFXDX</div>
            </div>
        </div>
    )
}

export default FooterComp;