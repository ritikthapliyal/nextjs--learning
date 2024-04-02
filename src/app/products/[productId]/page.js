import React from 'react'

function product(data) {

    // http://localhost:3000/products/1?name=ritik&username=ritikthapliyal

    // data = {
    //     params: { productId: '1' },
    //     searchParams: { name: 'ritik', username: 'ritikthapliyal' }
    // }

    const {productId} = data.params

    return (
        <div>this is product with productId : {productId}</div>
    )
}

export default product