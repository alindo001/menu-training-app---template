import React from 'react'

const menuItem = ({item}) => {
 
    return (
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img src={item.img} alt='' />
            </div>
            <div className='card-back'>
              <h1>{item.itemName}</h1>
              <ul>
                <li>
                  <strong>Price:</strong> {item.price}
                </li>
                <li>
                  <strong>Ingredients:</strong> {item.ingredients}
                </li>
                <li>
                  <strong>Allergens:</strong> {item.allergens}
                </li>
                {/* <li>
                  <strong>Ingredients:</strong> {item.ingredients}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      )
    }
export default menuItem
