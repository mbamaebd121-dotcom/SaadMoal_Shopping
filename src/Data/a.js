let orderCounter = 4;

const addOrder = ()=>{
    const newOrder = {
        id: new Date(),
        order_number: `#ORD-${String(orderCounter++).padStart(4, '0')}`
        // النتائج: #ORD-0001, #ORD-0002, #ORD-0003, ...
    }
    console.log(newOrder)
    return newOrder
}
addOrder()
