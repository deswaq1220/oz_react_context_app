import { createContext,useState,useMemo, useEffect } from "react";

export const OrderContext = createContext();

export function OrderContextProvider(props){

  const [orderCount, setOrderCount] = useState({
    products: new Map(),
    options: new Map()
  })

  const [totals, setTotals] = useState({
    products:0,
    options:0,
    total:0
  })

  const pricePerItem = {
    products: 1000,
    options: 500
  }

  const calculateSubtotal = (orderType,orderCount) => {
    let optionCount = 0;
    for(const count of orderCount[orderType].values()){
      optionCount += count
    }

    return optionCount * pricePerItem[orderType]
  }

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCount);
    const optionTotal = calculateSubtotal("options", orderCount);
    const total = productsTotal + optionTotal
    setTotals({
      products: productsTotal,
      options:optionTotal,
      total
    })
  },[orderCount])

  const value = useMemo(() => {
    function updateItemCount(itemName,newItemCount,orderType){
      const newOrderCounts = {...orderCount};
      const orderCountsMap = orderCount[orderType]
      orderCountsMap.set(itemName, parseInt(newItemCount));

      setOrderCount(newOrderCounts);
    }
    return[{...orderCount, totals},updateItemCount]
  },[orderCount,totals])

  return <OrderContext.Provider value={value} {...props}/>
    {/* {props.children} */}
  
}