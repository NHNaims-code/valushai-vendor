import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton } from '@mui/material';
import ReactToPrint from 'react-to-print';

function Table() {

    const handleSearch = () => {

    }
    const addNew = () => {

    }

  return (
    <div className='p-6'>
        <div className='shadow-md p-2 flex justify-between items-center bg-white'>
            <div>
            <div className='flex'>
            <span class="bg-gray-400 text-white px-4 py-2 rounded-l-sm" id="basic-addon1"><i class="far fa-search text-success"></i></span>
            <input className='px-2 rounded-sm-r border-[1px]' autoFocus={true} onChange={handleSearch} type="text" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            </div>
            <span>PRODUCTS</span>
            <div>
                <button className='border px-4 py-2 mr-2'><i class="far fa-arrow-alt-circle-down"></i> PDF</button>
                <button className='border px-4 py-2 mr-2'><i class="far fa-arrow-alt-circle-down"></i> EXCEL</button>
           
                <ReactToPrint
                    trigger={() => <button className="border px-4 py-2 mr-2"><i class="far fa-print"></i> Print</button>}
                    content={() => document.getElementById('printID')}
                />
          
                <button onClick={addNew} className='border px-4 py-2 mr-2'><i class="far fa-plus"></i> ADD NEW</button>
            </div>
        </div>
        <table className='shadow-md overflow-hidden'>
            <thead>
                <tr>
                    <th>SL</th>
                    <th>Product</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    [1,2,3].map((product, index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>Nikon Camera</td>
                            <td>Nikon</td>
                            <td>Camera</td>
                            <td>14,500</td>
                            <td>5</td>
                            <td className='w-[150px]'>
                                <div className='flex justify-end'>
                                <IconButton color="primary" size='small'><VisibilityOutlinedIcon/></IconButton>
                                <IconButton color="warning" size='small'><EditOutlinedIcon/></IconButton>
                                <IconButton color="error" size='small'><DeleteOutlineIcon/></IconButton>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table