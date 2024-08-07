import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const AddTask = ({addTasks}) => {
    const [value, setValue] = useState('')

    const addItem = ()=>{
        addTasks(value)    
        setValue("") 
    }
    return (
        <>
            <div className="input-group inputContainer">
                <input type="text" className="form-control" value={value} placeholder="Add A Task"  onChange={(elmnt)=>setValue(elmnt.target.value)}/>
                <Button onClick={addItem}  className="btn-custom">ADD</Button>
            </div>
        </>
    )
}

export default AddTask