import React from 'react';
import {Link} from "react-router-dom";

function EditContact(props) {
    return (
        <React.Fragment>
            <section className='add-contact p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h3 text-primary fw-bold'> Update Contact</p>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <form>
                                <div className='mb-2'>
                                    <input type='text' className='form-control' placeholder='Name'/>
                                </div>
                                <div className='mb-2'>
                                    <input type='text' className='form-control' placeholder='Surname'/>
                                </div>
                                <div className='mb-2'>
                                    <input type='text' className='form-control' placeholder={`Father's Name`}/>
                                </div>
                                <div className='mb-2'>
                                    <input type='text' className='form-control' placeholder='Profession'/>
                                </div>
                                <div className='mb-2'>
                                    <input type="submit" className='btn  btn-primary' value='Edit'/>
                                    <Link to='/' className='btn btn-warning'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default EditContact;

//add

// <React.Fragment>
//     <section className='add-contact p-3'>
//         <div className='container'>
//             <div className='row'>
//                 <div className='col'>
//                     <p className='h3 text-success fw-bold'> Create Contact</p>
//
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-md-4'>
//                     <form >
//                         <div className='mb-2'>
//                             <input  value={value} onChange={handleChange} type='text' className='form-control' placeholder='Name'/>
//                         </div>
//                         <div className='mb-2'>
//                             <input type='text' className='form-control' placeholder='Surname'/>
//                         </div>
//                         <div className='mb-2'>
//                             <input type='text' className='form-control' placeholder={`Father's Name`}/>
//                         </div>
//                         <div className='mb-2'>
//                             <input type='text' className='form-control' placeholder='Profession'/>
//                         </div>
//                         <div className='mb-2'>
//                             <input type="submit" className='btn  btn-success' value='Create'/>
//                             <Link to='/' className='btn btn-warning'>Cancel</Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </section>
// </React.Fragment>