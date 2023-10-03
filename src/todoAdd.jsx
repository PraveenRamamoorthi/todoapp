import {Box, Button} from '@mui/material';
import {useState} from 'react';
function ListName(props) {
  const [addedList, setAddedList] = useState(props.list);


  console.log(props.index);
  return (
    <Box className="content" style={{display: 'flex'}} key={props.index}>
      {/* <p>{props.list}</p> */}
      <p> {addedList}</p>
    </Box>
  );
}
export default ListName;

