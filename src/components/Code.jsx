import React from 'react';
import { useContext } from 'react';
import Editor from './Editor';
import { Box , styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';
const Container = styled (Box)`
    display: flex;
    background-color : #060606;
    height : 50vh
`
const Code = () => {
    const { html , setHtml , css , setCss , js , setJs} = useContext(DataContext);
  return (
    <Container>
        <Editor heading='HTML' icon='/' color='red' value={html} onChange={setHtml} />
        <Editor heading='CSS' icon='*' color='lightgreen' value={css} onChange={setCss} />
        <Editor heading='Javascript' icon='()' color='blue' value={js} onChange={setJs} />
    </Container>
  )
}

export default Code