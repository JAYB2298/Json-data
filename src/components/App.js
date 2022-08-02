
import { useEffect, useState } from "react"
import Product from "./product/Product"

export default function App() {
    const [store, setStore] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
            const body = await response.json();
            const data = []
            for (var i in body.products)
                data.push(body.products[i]);
            data.sort((a, b) => parseFloat(a.popularity) - parseFloat(b.popularity));
            setStore(data)

        }
        !store.length && fetchData()

    }, [store])
    return <Product store={store} />
}
