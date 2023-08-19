import Card from 'react-bootstrap/Card';
import Tag from './Tags';

const Cards = ({name, image, description, bgColor, shortText}) => {
  
  return (
    
    <Card className='cards'>
      <Card.Img className='cardImg' variant="top" src={image} />
      <Card.Body className='d-flex flex-column'>
        <Card.Title >{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Tag bgColor={bgColor} shortText={shortText}/>
        </Card.Body> 
    </Card>
    
  )
}

export default Cards