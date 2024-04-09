import React from 'react'

function BillSplit() {
  return (
    <div className="w-full md:w-2/3 mt-8 ">
    <form className="bg-yellow-100 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4 flex justify-between ">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Friend Name
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter friend's name"
        />
      </div>
      <div className="mb-6 flex justify-between">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="imgURL">
          Image URL
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="imgURL"
          type="text"
          placeholder="Enter image URL"
        />
      </div>
      <div className="mb-4 flex justify-between ">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Friend Name
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter friend's name"
        />
      </div>
      <div className="mb-6 flex justify-between">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="imgURL">
          Image URL
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="imgURL"
          type="text"
          placeholder="Enter image URL"
        />
      </div>
    </form>
  </div>
  )
}

export default BillSplit