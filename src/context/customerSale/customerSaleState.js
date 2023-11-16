import React, { useState } from 'react'
import customeSaleContext from './customerSaleContext'
import config from '../../config';


const CustomerSaleState = (props) => {
  const host=config.apiurl
    const customerDb=
        []

      const [customerSale, setCustomerSale] = useState(customerDb)
      const authToken = localStorage.getItem('authToken');
      const [confirmDeleteSaleId, setconfirmDeleteSaleId] = useState()
      const [isVisibleConfirmDelete, setisVisibleConfirmDelete] = useState(false)
      
      
      
      const getAllcustomersSales=async()=>{
        //get notes Api call
        
        const response = await fetch(`${host}/customerSale/fetchAllCustomerSale`, {
            method: "GET", 
             
            headers: {
              "Content-Type": "application/json",
              "auth-token": authToken
              
            },
            
          });
          const data=await response.json(); 
          setCustomerSale(data)
        

      }
      const addCustomerSale=async(customerId,product,quantity,customerName,productId)=>{
        
        const newCustomerSale={
            customerId:customerId,
            product:product,
            quantity:quantity,
            name:customerName,
            productId:productId
          }
          setCustomerSale(customerSale.concat(newCustomerSale))
        
        //Add customer Api call
        
            await fetch(`${host}/customerSale/addCustomerSales`, {
              method: "POST", 
               
              headers: {
                "Content-Type":"application/json",
                "auth-token": authToken
                
              },
              body: JSON.stringify({customerId,product,quantity,customerName,productId}),
            });
        
    }

    const updateCustomerSale = async (id, customerId, product, quantity, customerName) => {
      // Update customer sale API call
      await fetch(`${host}/customerSale/updateCustomerSale/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken
        },
        body: JSON.stringify({ customerId, product, quantity, customerName }),
      });
    }
  
    const deleteCustomerSale = async (id) => {
      const updatedCustomerSale = customerSale.filter((data) => {
        return data._id !== id
      })
      setCustomerSale(updatedCustomerSale)
  
      // Delete customer sale API call
       await fetch(`${host}/customerSale/deleteCustomerSale/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": authToken
        },
      });
    }
  

      return (

        <customeSaleContext.Provider value={{
            customerSale,
            getAllcustomersSales,
            addCustomerSale,
            deleteCustomerSale,
            confirmDeleteSaleId, 
            setconfirmDeleteSaleId,
            isVisibleConfirmDelete, 
            setisVisibleConfirmDelete
        }}>
          {props.children}
        </customeSaleContext.Provider>
  )
}

export default CustomerSaleState