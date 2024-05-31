// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, image) {
    const nft = {
        name: name,
        description: description,
        image: image
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach((nft, index) => {jsProof.js
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Description: ${nft.description}`);
        console.log(`  Image: ${nft.image}`);
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("Cool Cat", "A very cool cat.", "image1.png");
mintNFT("Super Dog", "A super heroic dog.", "image2.png");
mintNFT("Fancy Fish", "A fish with style.", "image3.png");

listNFTs();
console.log("Total Supply: " + getTotalSupply());
