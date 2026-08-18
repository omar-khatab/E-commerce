
function ProductImages({product}) {
    return (
        <div className="imgsItem">
            <div className="bigImgs">
                <img className="targetImg" src = {product.images[0]} alt = {product.title} />
            </div>
            <div className="smImgs">
                {product.images.map((img, i) => {
                    return <img key = {i} src = {img} alt = {product.title} onClick={() => {
                        document.querySelector(".targetImg").src = img
                    }}/>
                })}
            </div>
        </div>
    )
}

export default ProductImages