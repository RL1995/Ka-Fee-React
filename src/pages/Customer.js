import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import NotFound from '../components/NotFound';
import { baseURL } from '../shared';

export default function Customer() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [notFound, setNotFound] = useState();
    const {id} = useParams();
       useEffect(() => {
          const url = baseURL + '/api/customers/' + id;
            fetch(url)
                  .then((response) => {
                     if (response === 404) {
                         notFound(true);
                     }
                     return response.json();
                  })
                  .then ((data) =>{
                     setCustomer(data.customer);
                  })
       }, []);

 return(
   <> 
         {notFound ? <NotFound /> : null}

         {customer ? <div>
                        <p>{customer.id}</p>
                        <p>{customer.name}</p>
                        <p>{customer.industry}</p>
                     </div> 
                            : <p>wtf</p>}

      <Link to="/customers">Go back</Link>
      
   </>
   );
}
