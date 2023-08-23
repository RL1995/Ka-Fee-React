import { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LoginContext } from '../App';
import { baseURL } from '../shared';
import AddCustomer from '../components/AddCustomer';


export default function Customers() {  
   const [customers, setCustomers] = useState();
   const [show, setShow] = useState(false);



function toggleShow(){
    setShow(!show);

}
useEffect(() => {
         fetch(baseURL + '/api/customers/')
         .then((response) => response.json())
         .then((data) => {
            setCustomers(data.customers);
         });
      }, []); 
function newCustomer(name, industry){
            const data = {name: name, industry: industry}
            const url = baseURL + 'api/customers/';
fetch(url, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'}, 
            body:  JSON.stringify(data)
})
.then((response) => {
            if(!response.ok){
                throw new Error('something went wrong');
            }
            return response.json();
})
.then((data) =>{
})
.catch((e) =>{
    console.log(e);
})
}
return (
         <>
             <h1>Here are our customers:</h1>
  <ul>
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
  </ul>
           <AddCustomer
                newCustomer={newCustomer} 
                show={show}
                toggleShow={toggleShow}
           />
         </>
     );
 }
