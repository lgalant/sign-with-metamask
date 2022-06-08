
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from "react";

import { ethers } from "ethers";

export default function SignMessage() {

  const [texto1, setTexto1] = useState()
  const [pubkey, setPubkey] = useState()
  const [textoFirmado, setTextoFirmado] = useState()

  const  firmar= async(message) => {

    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");
    else alert("Wallet OK");

    await window.ethereum.send("eth_requestAccounts");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log("Signer", signer)
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();
    console.log("signature", signature)
    console.log("address", address)
    setPubkey(address)
    setTextoFirmado(signature)
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const texto1= data.get('texto1')
    setTexto1(texto1)
    await firmar(texto1)


  };
  return (

  <div>
  <Typography component="h1" variant="h5">
    Texto a firmar
  </Typography>

  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Texto"
      minRows={3}
      name="texto1"
      style={{ width: 500 }}
    />

    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      >
    Firmar con Metamask
    </Button>
  </Box>

  <Typography component="h5" variant="h5">
    Texto usado en la firma: {texto1}
  </Typography>

  <Typography component="h5" variant="h5">
    Address firmante: {pubkey}
  </Typography>

  <Typography component="h7" variant="h7">
    Texto firmado: {textoFirmado}
  </Typography>
    </div>
 

    )

}