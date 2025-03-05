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


function listEventos() {
  const[events, setEventos] = useState([]);

  async function getEventos(){
    //Chamada da Api
    await api.getEventos().then(
      (response)=>{
        console.log(response.data.events)
        setEventos(response.data.events)
      },(error)=>{
        console.log("Erro", error)
      }
    )
  }

  const listEventos = events.map((events)=>{
    return(
      <TableRow key={events.id_evento}>
        <TableCell align="center">{events.nome}</TableCell>
        <TableCell align="center">{events.descricao}</TableCell>
        <TableCell align="center">{events.data_hora}</TableCell>
        <TableCell align="center">{events.local}</TableCell>
      </TableRow>
    )
  })

  useEffect(()=>{
    getEventos();
  },[]);


  return (
    <div>
      <h5>Lista de eventos</h5>
      <TableContainer component={Paper} style={{margin:"2px"}}>
        <Table size="small">
          <TableHead style={{backgroundColor:"brown", borderStyle:"solid"}}>
            <TableRow>
              <TableCell align="center">
                Nome
              </TableCell>
              <TableCell align="center">
                Descrição
              </TableCell>
              <TableCell align="center">
                Data e Hora
              </TableCell>
              <TableCell align="center">
                Local
              </TableCell>
            </TableRow>
          </TableHead>
            <TableBody>{listEventos}</TableBody>
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
      <Button 
      fullWidth
      variant='contained'
      component={Link}
      to="/"
      >
        Criar Evento
      </Button>
    </div>  
  )
}

export default listEventos;