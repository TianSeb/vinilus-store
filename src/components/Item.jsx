import { LinkContainer } from 'react-router-bootstrap'
import './styles/Item.css'

const Item = ({id,artist,album,year,img}) => {

const onClick = (e) => {
    e.preventDefault()
    console.log("clicked")
    }

return (
    <div className="album albumCd">
        <div className="cover">  
                <img src={img} alt="disco" />
        </div>
        <div className="vinyl round btn" role="button" onClick={onClick}>
        <LinkContainer to={`/vinilos/${id}`}>
            <div className="textCon">
                <h1>{artist}</h1>
                <h3>{album}</h3>
            </div>
        </LinkContainer>
            <div className="label round">
                <div className="hole round"></div>
            </div>
        </div>
    </div>
);
}
export default Item