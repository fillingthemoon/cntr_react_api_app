import React, {useState} from 'react';

// Using https://www.blockcypher.com/dev/ethereum/#address-api

function Home() {
  const [addBal, setAddBal] = useState(null);
  const [blkHeight, setBlkHeight] = useState(null);
  const blkAddress = "0xaedd8bc2c9abc2f7887ff4bbb33ca00874db05a5";

  useState (async () => {
    const responseBal = await fetch("https://api.blockcypher.com/v1/eth/main/addrs/" + blkAddress + "/balance");
    const dataBal = await responseBal.json();
    const addBal = dataBal.balance;
    setAddBal(addBal);

    const responseBlkHeight = await fetch("https://api.blockcypher.com/v1/eth/main");
    const dataBlkHeight = await responseBlkHeight.json();
    const blkHeight = dataBlkHeight.height;
    setBlkHeight(blkHeight);
  },[]);

  return (
    <div id="home-container">
    <h1> Centaur React API App </h1>

    <div id="container">
      <h3> Ethereum Address: </h3>
      <p> {blkAddress} </p>
    </div>

    <div id="container">
      <h3> Current Ethereum block height: </h3>
      <p> {blkHeight} </p>
    </div>

    <div id="container">
      <h3> Ethereum balance of address (wei): </h3>
      <p> {addBal} </p>
    </div>

    </div>
  );
}

export default Home;
