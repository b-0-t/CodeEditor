import React , { useContext , useState , useEffect } from 'react';
import { Box , styled } from '@mui/material'; 
import { DataContext } from '../context/DataProvider';

const Container = styled (Box)`
    height : 41vh;
`


const Result = () => {
    const [ source , setSource ] = useState('');
    const { html , js , css } = useContext(DataContext);

    const sourceCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSource(sourceCode)
        },1000)

        return () => clearTimeout(timeout); // we need to clear the timeout we have created
    } , [html , css , js])

  return (
    <Container>
        <iframe 
            srcDoc={source}
            title = 'Output'
            sandbox='allow-scripts' //by default the iframe doesn't allow java-scripts hence we need to do allow-scripts to allow js.
            frameBorder={0}
            width='100%'
            height='100%'
        />
    </Container>
  )
}

export default Result;