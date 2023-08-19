import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import AddEmployee from '../components/AddEmployee';
import {v4 as uuidv4 } from 'uuid';
import EditEmployee from '../components/EditEmployee';


function Employees(props) {
  const [role, setRole] = useState('Bro');
  const [employees, setEmployees] = useState([
      {   
          id: 1,
          name: "RL", 
          role: "Intern", 
          img: "https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.webp?w=1400&f=e567216d0940dbc3b3556605d7dc4ecb",
      },
      {  
         id: 2,
         name: "Kris",
         role: role,
         img: "https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.webp?w=1400&f=e567216d0940dbc3b3556605d7dc4ecb",
      },
      {
         id: 3,
         name: "Corey",
         role: "Wingman",
         img: "https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.webp?w=1400&f=e567216d0940dbc3b3556605d7dc4ecb",
      },
  ]);



   function updateEmployee(id, newName, newRole) {
        const updatedEmployees = employees.map((employee) => {
          if (id == employee.id) {
            return {...employee, name: newName, role: newRole};
          }
          return employee;
          });
     setEmployees(updatedEmployees);
   }

  
   function newEmployee(name, role, img) {
      const newEmployee = {
            id: uuidv4(),
            name: name,
            role: role,
            img: img,
      };
     setEmployees([...employees, newEmployee]);
}

const showEmployees = true;
  return (
   <div >
        {showEmployees ? (
         <>
             <div className="flex flex-wrap justify-center">            
                  {employees.map((employee) => {
                    const editEmployee = (
                      < EditEmployee
                        id={employee.id}
                        name={employee.name}
                        role={employee.role}
                        updateEmployee={updateEmployee}
                       />
                    );   
                     return(
                       <Employee 
                        key={employee.id}
                        id={employee.id}
                        name={employee.name}
                        role={employee.role}
                        img={employee.img}
                        editEmployee={editEmployee}
                      />
                     );
                  })}
             </div>   
             <AddEmployee newEmployee={newEmployee}/>
         </>        )  
                 : (
                       <p>you bois cant see them</p>   
                   )}
                 {props.children};
  </div>
  );
}
export default Employees;

