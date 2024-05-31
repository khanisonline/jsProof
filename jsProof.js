// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: Create a function to mint an NFT and store it in the collection
function mintNFT(name, description, owner) {
    // Create an NFT object with the given metadata
    let nft = {
        name: name,
        description: description,
        owner: owner
    };
    // Store the NFT object in the nftCollection array
    nftCollection.push(nft);
}

// Step 3: Create a function to list all NFTs and their metadata
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Owner: " + nft.owner);
        console.log("------------------------");
    });
}

// Step 4: Create a function to return the total number of NFTs created
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line

// Mint some NFTs
mintNFT("NFT 1", "This is the first NFT", "Alice");
mintNFT("NFT 2", "This is the second NFT", "Bob");
mintNFT("NFT 3", "This is the third NFT", "Charlie");

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total Supply: " + getTotalSupply());
