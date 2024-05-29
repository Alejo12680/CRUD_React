import React from 'react'

// Desustrucracion
export const Person = ({id, name, role, img, handleEdit, handleDelete}) => {
	return (
		<div>
			<div className='col'>
				<div className="card" style={{ width: "18rem" }}>
					<img src={img} className='card-img-top' alt={name} />
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">{role}</p>
					</div>
					<div className='mb-4'>
						{/* Estas funciones se hacen en el padre 'Persons' y se envian al hijo */}
						<button onClick={handleEdit} className='btn btn-success me-2'>Editar</button>
						<button onClick={() => handleDelete(id)} className='btn btn-danger' data-bs-toggle='modal' data-bs-target='#deleteModal' >Eliminar</button>
					</div>
				</div>
			</div>
		</div>
	)
}
