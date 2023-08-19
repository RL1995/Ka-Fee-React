import { useEffect, useState } from "react";
import { v4 as uuvidv4 } from "uuid";  
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";
export default function Definition() {

  const [word, setWord] = useState([]); 
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search }= useParams(); 

  useEffect(() => {
      const url= "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;
      fetch(url)
            .then((response) => {
                  if (response.status === 404) {
                      setNotFound(true);
                } else if (response.status === 401) {
                    navigate('.login')
                } else if (response.status === 500) {
                  setError(true);
                }

              if(!response.ok) {
                setError(true);    
              }

            return response.json();
            })
            .then((data) => {
              setWord(data[0].meanings);
            });
    }, []);
     if (notFound === true) {
      return  (
          <>
            <NotFound />
           
          </>
      );
     }
     if (error === true) {
      return  (
          <>
             <p>Something went wrong, Try again?</p>
            <Link to= "/dictionary">Search another</Link>
          </>
      );
     }

  return (
    <>
       {word 
         ? <>
                    <h1>Here is an example of a random definition :</h1>
                     {word.map((meaning) => {
                      return  (
                            <p key={uuvidv4()}>
                                {meaning.partOfSpeech + ' '} 
                                {meaning.definitions[0].definition}  
                           </p>
                             );
                     })}
                     <p>Search Again:</p>
                     <DefinitionSearch />
           </>
                 : null}
       </>
   );
}
       