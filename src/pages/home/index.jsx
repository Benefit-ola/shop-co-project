import React from 'react'
import Herosection from '../../Components/heroSection/herosection'
import ProductList from '../../Components/Products/productSection'
import CustomersReview from '../CustomerReview'
import BrowseList from '../../Components/BrowseSection/browsList'
// import TopSelling from '../../Components/Products/productTopSelling'

const HomePage = () => {
  return (
    <div>
      <Herosection/>
      <ProductList/>
      <CustomersReview/>
      <BrowseList/>
      
    </div>
  )
}

export default HomePage
