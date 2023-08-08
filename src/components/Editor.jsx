import React , { useState } from 'react';  
import '../App.css';
import { Box , styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'; // imported to detect the xml code
import 'codemirror/mode/javascript/javascript'; // imported to detect any js code
import 'codemirror/mode/css/css'; // imported to detect any css code
// flex-grow tells how much the element will grow in comparsion to siblings
// flex-basic tells how large an element will be along the main axis
const Container = styled (Box)`
    flex-grow : 1;
    flex-basic : 0; 
    display : flex;
    flex-direction : column;
    padding : 0 8px 8px;
`
const Heading = styled (Box)`
    background : #1d1e22;
    display : flex;
    padding : 9px 12px;
`
const Header = styled (Box)`
    display : flex;
    background : #060606;
    color : #AAAEBC;
    justify-content : space-between;
    font-weight : 700;
`
const Editor = ({ heading , icon , color , value , onChange }) => {
    const [ open , setOpen] = useState(true);
    const handleChange = (editor , data , value) => {
        onChange(value);
    }
  return (
    //Box is a material-ui concept that by default gives a div but can be later changed to some other type like a span (Box component = "span").
    <Container style = { open ? null : {flexGrow : 0}}>
        <Header>
            <Heading>
                <Box 
                    component="span" 
                    style={{
                        background : color,
                        height : 20,
                        width : 20,
                        display : 'flex',
                        placeContent : 'center',
                        borderRadius : 5,
                        marginRight : 5,
                        paddingBottom : 2,
                        color : '#000'
                    }}
                >{icon}</Box>
                { heading }
            </Heading>
            <CloseFullscreenIcon fontSize='small' style={{alignSelf : 'center'}} onClick = {() => setOpen( prevState => !prevState )} /> 
        </Header>
        <ControlledEditor 
            className='controlled-editor'
            // controlled component are those in which value field is controlled by the react whereas in uncontrolled component value is controlled by the form itself.
            // value in the input was not changing due to value field not been set 
            value={value}
            onBeforeChange={handleChange}
            options={{
                theme: 'material',
                lineNumbers: true
            }}
        />
    </Container> 
  )
}

export default Editor