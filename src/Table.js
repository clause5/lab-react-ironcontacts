import React, {useState} from 'react';
import Row from './Row';
import contacts from './contacts.json';

const Table = () => {
    //status lista
    let contactos = contacts.slice(0,5);
    const [lista, addContacto] = useState([...contactos])
    console.log(lista)
    const addRandomContact = () =>{
        console.log()
        if(lista.length < contacts.length){
            let difference = contacts.filter( x => !lista.includes(x));
            addContacto([...lista, difference[Math.floor(Math.random()* difference.length)]])
            console.log(lista)
        }else{
            document.getElementById('add').style.cursor = 'not-allowed';
        }
    }
    //addRandomContact()

    const sortByName = () =>{
        let sorted = lista.sort((a,b)=>a.name.localeCompare(b.name));
        addContacto([...sorted]);
    }
    const sortByPopularity = () =>{
        let sorted = lista.sort((a,b) => parseFloat(b.popularity) - parseFloat(a.popularity));
        addContacto([...sorted]);
    }

    const deleteContact =(id)=>{
        console.log('borrando contacto', id)
        let filtered = lista.filter(element => element.id !== id)
        addContacto([...filtered]);
    }

    return (
        <div>
            <h1>IRON CONTACTS</h1>
            <div id="action-btns">
                <button
                    id="add"
                    type="button"
                    onClick={()=> addRandomContact()}
                >Add Random Contact</button>
                <button
                    type="button"
                    onClick={()=>sortByName()}
                >Sort by name</button>
                <button
                    type="button"
                    onClick={()=>sortByPopularity()}
                >Sort by popularity</button>

            </div>
            
            <table>
            <thead>
               
                <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>

                </tr>
            </thead>
                <tbody>
                    {lista.map(contacto => (

                    <Row key={contacto.id} picture={contacto.pictureUrl} name={contacto.name} popularity={contacto.popularity} deleteBtn={()=> deleteContact(contacto.id)} />
                    ))}
                </tbody>
            </table>
        </div> 
     );
    
}
 
export default Table ;