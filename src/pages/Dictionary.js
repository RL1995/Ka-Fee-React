import {useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import Definition from './Definition';
import DefinitionSearch from '../components/DefinitionSearch';


export default function Dictionary() {
   return (
     <div className='flex justify-center'>
         <DefinitionSearch />
     </div>
   ) 
}   