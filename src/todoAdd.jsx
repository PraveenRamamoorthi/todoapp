import {Box} from '@mui/material';
function ListName(props) {
  console.log(props.index);
  return (
    <Box className="content" style={{display: 'flex'}} key={props.index}>
      <p>{props.list}</p>
    </Box>
  );
}
export default ListName;
