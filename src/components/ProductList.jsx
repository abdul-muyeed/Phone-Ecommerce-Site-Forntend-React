import { useSelector } from "react-redux";
import Card from "./Card";

function ProductList() {
  const products = useSelector(state => state.productReducer.products)
   console.log(products[0]._id)
  
  return (
    <>
      <section className="bg-[#f5f5f5]">
        <div className="container">
          <div className="flex w-full py-5 justify-center gap-5">
            <div className="bg-white flex flex-col w-44   p-3 shadow-md">
              <h1 className="text-lg font-semibold">Filter By</h1>
              <hr className="my-2 border-gray-400" />
              <div>
              <h1>Price Range</h1>
              <div className="flex justify-around items-center p-2 gap-2">
              <input type="text" className="w-1/2 border border-gray-500 outline-none p-1 rounded-md text-center" placeholder="min" name="date_from"/>
				<input type="text" className="w-1/2 border border-gray-500 outline-none p-1 rounded-md text-center" placeholder="max" name="date_to"/>
              </div>
              </div>
              
              <div>
                
                <h1>Brand</h1>
                <div className="p-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3.5 w-3.5 text-gray-700"
                      />
                      <span className="ml-2 text-gray-700">Iphone</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3.5 w-3.5 text-gray-700"
                      />
                      <span className="ml-2 text-gray-700">Samsung</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3.5 w-3.5 text-gray-700"
                      />
                      <span className="ml-2 text-gray-700">Realme</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div>
                
                <h1>Brand</h1>
                <div className="p-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3.5 w-3.5 text-gray-700"
                      />
                      <span className="ml-2 text-gray-700">Iphone</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3.5 w-3.5 text-gray-700"
                      />
                      <span className="ml-2 text-gray-700">Samsung</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox h-3.5 w-3.5 text-gray-700"
                      />
                      <span className="ml-2 text-gray-700">Realme</span>
                    </label>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="w-full">
                <div className="w-full h-5 flex justify-between items-center py-8 px-3 bg-white mb-5 rounded-md shadow-md">
                    <div>
                        <span>Applied Filter</span>
                    </div>
                    <div className="flex flex-end gap-4 items-center">
                        <span className="text-gray-500  w-[100px]">Sort By</span>
                        <select className="bg-gray-100 border text-center border-gray-300 py-1 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500   outline-none shadow-sm" name="cars" id="cars">
                            <option value="volvo">New Product</option>
                            <option value="saab">Trending</option>
                            <option value="opel">Bestselling</option>
                            <option value="audi">Low to High</option>
                            <option value="audi">High to Low</option>
                        </select>
                    </div>
                </div>
            <div className="grid w-full gap-5 product-wrap">
              {
                products.map((product, index) => {
                  
                  
                  return(
                    <>
                      <Card key={index} product={product}/>
                    </>
                  )
                })
              }
              
              
              
            </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductList;
