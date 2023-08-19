import Badge from 'react-bootstrap/Badge';

function Tag ({bgColor, shortText}) {
  return (

      <Badge className='mt-auto' bg={bgColor}>{shortText}</Badge>
     
    )
}

export default Tag