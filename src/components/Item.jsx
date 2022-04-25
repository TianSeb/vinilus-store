import './styles/Item.css'

const Item = ({artist,album,year,img}) => {

const onClick = (e) => {
    e.preventDefault()
    console.log("clicked")
    }

return (
<>
    <div className="album albumCd">
        <div className="cover">
            <img src={img} alt="disco" />
        </div>
        <div className="vinyl round">
            <div className="textCon">
                <h1>{artist}</h1>
                <h3>{album}</h3>
            </div>
            <div className="btn label round" role="button" onClick={onClick}>
                <div className="hole round"></div>
            </div>
        </div>
    </div>
</>
);
}
export default Item