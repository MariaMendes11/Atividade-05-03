import { useState, useEffect } from 'react'
// Imports para criação de tabela
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
// TableHead é onde colocamos os titulos
import TableHead from '@mui/material/TableHead';
// TableBody é onde colocamos o conteúdo
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import api from "../axios/axios.js"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';


function listOrganizadores() {
  const[organizadores, setOrganizadores] = useState([]);

  async function getOrganizadores(){
    //Chamada da Api
    await api.getOrganizadores().then(
      (response)=>{
        console.log(response.data.orgs)
        setOrganizadores(response.data.orgs)
      },(error)=>{
        console.log("Erro", error)
      }
    )
  }

  const listOrganizadores = organizadores.map((organizador)=>{
    return(
      <TableRow key={organizador.id_organizador}>
        <TableCell align="center">{organizador.nome}</TableCell>
        <TableCell align="center">{organizador.email}</TableCell>
        <TableCell align="center">{organizador.telefone}</TableCell>
        <TableCell align="center">{organizador.senha}</TableCell>
      </TableRow>
    )
  })

  useEffect(()=>{
    getOrganizadores();
  },[]);


  return (
    <div>
      <h5>Lista de Organizadores</h5>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size="small">
          <TableHead style={{backgroundColor:"brown", borderStyle:"solid"}}>
            <TableRow>
              <TableCell align="center">
                Nome
              </TableCell>
              <TableCell align="center">
                E-mail
              </TableCell>
              <TableCell align="center">
                Telefone
              </TableCell>
              <TableCell align="center">
                Senha
              </TableCell>
            </TableRow>
          </TableHead>
            <TableBody>{listOrganizadores}</TableBody>
        </Table>
      </TableContainer>
      <Button 
      fullWidth
      variant='contained'
      component={Link}
      to="/"
      >
        SAIR
      </Button>
    </div>  
  )
}

export default listOrganizadores