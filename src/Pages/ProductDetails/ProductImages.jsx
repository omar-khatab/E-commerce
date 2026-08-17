import { v4 as uuidv4 } from 'uuid';

function ProductImages({product}) {
    return (
        <div className="imgsItem">
            <div className="bigImgs">
                <img className="targetImg" src = {product.images[0]} alt = {product.title} />
            </div>
            <div className="smImgs">
                {product.images.map((img) => {
                    return <img key = {uuidv4()} src = {img} alt = {product.title} onClick={() => {
                        document.querySelector(".targetImg").src = img
                    }}/>
                })}
            </div>
        </div>
    )
}

export default ProductImages