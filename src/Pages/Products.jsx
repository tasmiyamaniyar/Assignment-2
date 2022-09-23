import React, {useState, useEffect} from "react"
import "./Style.css"
import productList from "../Assets/jsons/products.json"
import Product from "../Components/Product"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(productList)
    }, [])
    return (
        <div className="container">
            <h1>Products</h1>
            <div className="product-grid">
                {products.map((product) => <Product product={product} />)}
            </div>
            {/* Code for Product List */}
        </div>
    )
}

export default Products