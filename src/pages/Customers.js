import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LoginContext } from '../App';
import { baseURL } from '../shared';


export default function Customers() {  
   const [customers, setCustomers] = useState();
      useEffect(() => {
         fetch(baseURL + '/api/customers/')
         .then((response ) => response.json())
         .then((data) => {
            console.log(data.customers);
            setCustomers(data.customers);
         });
      }, []); 
  
      return (
         <>
             <h1>Here are our customers:</h1>
             {customers ? customers.map((customer) => {
                       return (
                           <div className="m-2" key={customer.id}>
                               <Link to={'/customers/' + customer.id}>
                                   <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                       {customer.name}
                                   </button>
                               </Link>
                           </div>
                       );
                   })
                 : null}
         </>
     );
 }
