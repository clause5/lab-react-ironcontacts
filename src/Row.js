import React from 'react';

const Row = ({picture, name, popularity,deleteBtn}) => {
   // const {picture, name, popularity, id} = this.props;
    return ( 
        <tr>
            <td> <img src={picture} alt={name}/> </td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td>
                <button
                    type="button"
                    onClick={deleteBtn}
                >Delete</button>
            </td>
        </tr>

     );
}
 
export default Row;