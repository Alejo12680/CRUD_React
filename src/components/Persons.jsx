import React from 'react'
import { Person } from './Person';
import { useState } from 'react'

// Destructuracion
export const Persons = ({ persons, setPersons }) => {

  // Hooks
  const [editinId, setEditingID] = useState(null);
  const [editedPerson, setEditedPerson] = useState({
    name: '',
    role: '',
    img: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  //Funciones handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPerson(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  // Actualizar el array de persons con los cambios que tenemos en el formulario
  const handleSave = (e) => {
    setPersons(persons.map(person => person.id === editinId ? editedPerson : person));
    // Resetear el ID a null de la persona que ya se edito
    setEditingID(null);
    // Resetear los datos de la persona editada
    setEditedPerson({
      name: '',
      role: '',
      img: '',
    });
    // Desactivar el estado de edicion
    setIsEditing(false);

  }

  // Funcion del hijo
  const handleEdit = (id) => {
    // Establece el Id de la paersona que queremos editar
    setEditingID(id);
    // Activamos el estado de edicion
    setIsEditing(true);
    // Buncamos la persona a editar por medio del id y la asignacion de personToEdit
    const personToEdit = persons.find(person => person.id === id);
    // Establesemos los datos de la persona editar
    setEditedPerson({ ...personToEdit });
  }

  return (
    <div>
      <h2>TEAM IT</h2>
      <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-row'>
          {persons.map((person) => {
            return (
              <div>
                {/* HIJO  (siempre que se trabaje con .map se maneja key*/}
                <Person
                  key={person.id}
                  name={person.name}
                  role={person.role}
                  img={person.img}
                  handleEdit={() => handleEdit(person.id)} />
              </div>
            )
          })}
        </div>
      </div>
      <br />
      <hr />
      <div className='mt-4 row p-2'>
        {/* El input debe traerme los datos de las personas editadas */}
        <h2>Modificar Datos</h2>
        <input type="text" name='name' value={editedPerson.name} onChange={handleChange} placeholder='Nombre' className='form-control mb-2' />

        <input type="text" name='role' value={editedPerson.role} onChange={handleChange} placeholder='Rol' className='form-control mb-2' />

        <input type="text" name='img' value={editedPerson.img} onChange={handleChange} placeholder='URL de la imagen' className='form-control mb-2' />

        <div className='mt-2'>
          <button className='btn btn-primary' onClick={handleSave}>Guardar</button>
        </div>
      </div>
    </div>
  )
}

