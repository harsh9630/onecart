import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import RelatedProduct from '../component/RelatedProduct'
import Loading from '../component/Loading'

function ProductDetail() {
  const { productId } = useParams()
  const { products, currency, addtoCart, loading } = useContext(shopDataContext)
  const [productData, setProductData] = useState(false)

  const [image, setImage] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = () => {
    products.forEach(item => {
      if (item._id === productId) {
        setProductData(item)
        setImage1(item.image1)
        setImage2(item.image2)
        setImage3(item.image3)
        setImage4(item.image4)
        setImage(item.image1)
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return productData ? (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025]'>
      {/* Product Image Section */}
      <div className='flex flex-col lg:flex-row items-center justify-start gap-6 p-6'>
        {/* Thumbnails */}
        <div className='flex lg:flex-col gap-4'>
          {[image1, image2, image3, image4].map((img, idx) => (
            <div key={idx} className='w-[60px] h-[60px] md:w-[100px] md:h-[110px] bg-slate-300 border border-gray-400 rounded-md overflow-hidden cursor-pointer'>
              <img src={img} alt="" className='w-full h-full object-cover' onClick={() => setImage(img)} />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className='w-[90%] lg:w-[60%] max-w-[500px] border border-gray-400 rounded-md overflow-hidden'>
          <img src={image} alt="" className='w-full h-full object-contain rounded-md' />
        </div>
      </div>

      {/* Product Info Section */}
      <div className='px-6 lg:px-16 py-6 text-white flex flex-col gap-4'>
        <h1 className='text-2xl md:text-3xl font-bold'>{productData.name.toUpperCase()}</h1>

        <div className='flex items-center gap-1'>
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStar className='text-yellow-400' />
          <FaStarHalfAlt className='text-yellow-400' />
          <span className='pl-2'>(124)</span>
        </div>

        <p className='text-xl font-semibold'>{currency} {productData.price}</p>

        <p className='text-sm sm:text-base md:text-lg max-w-3xl'>
          {productData.description} and Stylish, breathable cotton shirt with a modern slim fit. Easy to wash, super comfortable, and designed for effortless style.
        </p>

        {/* Size Selection */}
        <div className='mt-4'>
          <p className='text-lg font-semibold mb-2'>Select Size</p>
          <div className='flex flex-wrap gap-2'>
            {productData.sizes.map((item, index) => (
              <button
                key={index}
                className={`border px-4 py-2 bg-slate-300 rounded-md text-sm font-semibold ${
                  item === size ? 'bg-black text-[#2f97f1] text-base' : ''
                }`}
                onClick={() => setSize(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className='mt-4 text-sm sm:text-base bg-[#495b61c9] text-white py-2 px-6 rounded-xl border border-gray-500 shadow-md hover:bg-[#3a4a50] active:bg-slate-600'
            onClick={() => addtoCart(productData._id, size)}
          >
            {loading ? <Loading /> : "Add to Cart"}
          </button>
        </div>

        {/* Product Highlights */}
        <div className='w-full border-t border-slate-700 mt-6 pt-4 text-sm space-y-1'>
          <p>✅ 100% Original Product</p>
          <p>💰 Cash on delivery is available</p>
          <p>🔁 Easy return and exchange policy within 7 days</p>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className='w-full px-6 lg:px-16 mt-10'>
        <div className='flex gap-4 text-white'>
          <p className='border px-4 py-2 text-sm'>Description</p>
          <p className='border px-4 py-2 text-sm'>Reviews (124)</p>
        </div>

        <div className='mt-4 w-full bg-[#3336397c] text-white text-sm md:text-base px-4 py-4 rounded-md'>
          <p className='leading-relaxed text-justify'>
            Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on OneCart. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this shirt is a must-have essential for those who value both fashion and function.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className='mt-10'>
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
          currentProductId={productData._id}
        />
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default ProductDetail
