import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, transformCharacterData } from '../utils/constants';
import Select from '../components/Select';
import NotificationMessage from '../components/NotificationMessage';
import MintingModal from '../components/MintingModal'


import HealthGame from '../utils/HealthGame.json';

const SelectCharacter = ({ setCharacterNFT }) => {
  const [characters, setCharacters] = useState([]);
  const [gameContract, setGameContract] = useState(null);
  const [mintingCharacter, setMintingCharacter] = useState(false);
  const [showMintedModal, setShowMintedModal] = useState(false)
  const [modalText, setModalText] = useState("")



  const mintCharacterNFTAction = (characterId) => async () => {
    try {
      if (gameContract) {
        setMintingCharacter(true);
        console.log('Minting character in progress...');
        const mintTxn = await gameContract.mintCharacterNFT(characterId);
        await mintTxn.wait();
        console.log('mintTxn:', mintTxn);
        setMintingCharacter(false);
      }
    } catch (error) {
      console.warn('MintCharacterAction Error:', error);
      setMintingCharacter(false);
    }
  };

  useEffect(() => {
    const { ethereum } = window;
  
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        HealthGame.abi,
        signer
      );
  
      setGameContract(gameContract);
    } else {
      console.log('Ethereum object not found');
    }
  }, []);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        console.log('Getting contract characters to mint');
  
        const charactersTxn = await gameContract.getAllDefaultCharacters();
        console.log('charactersTxn:', charactersTxn);
  
        const characters = charactersTxn.map((characterData) =>
          transformCharacterData(characterData)
        );
  
        setCharacters(characters);
      } catch (error) {
        console.error('Something went wrong fetching characters:', error);
      }
    };

    const onCharacterMint = async (sender, tokenId, characterIndex) => {
      console.log(
        `CharacterNFTMinted - sender: ${sender} tokenId: ${tokenId.toNumber()} characterIndex: ${characterIndex.toNumber()}`
      );  
      alert(`Your NFT is all done -- see it here: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
      setModalText(`https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
      setShowMintedModal(true)

      if (gameContract) {
        const characterNFT = await gameContract.checkIfUserHasNFT();
        console.log('CharacterNFT: ', characterNFT);
        setCharacterNFT(transformCharacterData(characterNFT));
      }

    };

      if (gameContract) {
        getCharacters();
        gameContract.on('CharacterNFTMinted', onCharacterMint);
      }

    return () => {
      if (gameContract) {
        gameContract.off('CharacterNFTMinted', onCharacterMint);
      }
    };
  }, [gameContract]);

  return (
    <div className="">
      {showMintedModal ? <MintingModal link={modalText} showModal={showMintedModal} /> : <></>}
      {mintingCharacter && (
        <>
        <NotificationMessage message="Minting in progress..." />
        </>
      )}
      {characters.length > 0 && (
      <div className=""><Select action={mintCharacterNFTAction} /></div>
    )}
    
    </div>
  );
};

export default SelectCharacter;