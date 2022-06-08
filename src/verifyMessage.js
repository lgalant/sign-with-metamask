
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


  const validar = async ( message, signature, address ) => {
    try {
      const signerAddr = await ethers.utils.verifyMessage(message, signature);
      if (signerAddr !== address) {
        alert("Firma invalida!" )
        return
      }
      alert("Validacion OK!")

    } catch (err) {
      console.log(err);
      alert("error chequeando!")
    }
  };


  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const texto1= data.get('texto1')
    const textoFirmado= data.get('textoFirmado')
    const pubkey= data.get('pubkey')
    await validar(texto1, textoFirmado, pubkey)


  };
  return (

  <div>
  <Typography component="h1" variant="h5">
    Verificar
  </Typography>

  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Texto original"
      minRows={3}
      name="texto1"
      style={{ width: 500 }}
    />


<TextareaAutosize
      aria-label="empty textarea"
      placeholder="Texto firmado"
      minRows={3}
      name="textoFirmado"
      style={{ width: 500 }}
    />

<TextareaAutosize
      aria-label="empty textarea"
      placeholder="Address (pubkey)"
      name="pubkey"
      style={{ width: 500 }}
    />


    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      >
        Validar
    </Button>
  </Box>

    </div>
 

    )

}