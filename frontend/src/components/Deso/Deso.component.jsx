import React, { useState } from "react";

import Deso from "deso-protocol";
const deso = new Deso();

const DesoComponent = () => {
    const [sampleResponse, setSampleResponse] = useState();
    const [loginResponse, setLoginResponse] = useState();
    const [postResponse, setPostResponse] = useState();
    const [nftResponse, setNftResponse] = useState();

    return (
        <div>
            <h1>My Deso App</h1>
            <button
                style={{ cursor: "pointer" }}
                onClick={async () => {
                    const user = await deso.identity.login();
                    console.log(user);
                    setLoginResponse(JSON.stringify(user, null, 2));
                }}
            >
                login
            </button>
            <button
                onClick={() => {
                    deso.identity.logout(deso.identity.getUserKey());
                }}
            >
                logout
            </button>
            <button
                onClick={async () => {
                    const user = await deso.user.getSingleProfile({
                        PublicKeyBase58Check: deso.identity.getUserKey(),
                    });
                    console.log(user);
                    setSampleResponse(JSON.stringify(user, null, 2));
                }}
            >
                get user
            </button>
            <button
                onClick={async () => {
                    const postResponse = await deso.posts.submitPost({
                        UpdaterPublicKeyBase58Check: deso.identity.getUserKey(),
                        BodyObj: {
                            Body: "This is my vodeo post",
                            VideoURLs: ["https://www.youtube.com/watch?v=8hly31xKli0&t"],
                            ImageURLs: [],
                        },
                    });
                    setPostResponse(JSON.stringify(postResponse, null, 2));
                }}
            >
                submit post
            </button>
            <button
                onClick={async () => {
                    const nftResponse = await deso.nft.createNft({
                        UpdaterPublicKeyBase58Check: deso.identity.getUserKey(),
                        NFTPostHashHex:
                            "be84338d248394f9ef194c01054039a51667420a7fb91fb838c2445f786432b6",
                        NumCopies: 1,
                        NFTRoyaltyToCreatorBasisPoints: 100,
                        NFTRoyaltyToCoinBasisPoints: 100,
                        HasUnlockable: false,
                        IsForSale: false,
                        MinFeeRateNanosPerKB: 1000,
                    });
                    setNftResponse(JSON.stringify(nftResponse, null, 2));
                }}
            >
                {" "}
                Create NFT{" "}
            </button>
            <pre>{nftResponse}</pre>
            <div>
                Login info
                <pre>{loginResponse}</pre>
            </div>
            <div>
                User info
                <pre>{sampleResponse}</pre>
            </div>
            <div>
                Post info
                <pre>{postResponse}</pre>
            </div>
        </div>
    );
};

export default DesoComponent;
