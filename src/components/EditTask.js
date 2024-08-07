// EditTask.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const EditTask = ({ currentTask, updateTask, index, cancelEdit }) => {
    const [value, setValue] = useState(currentTask.title);

    const saveItem = () => {
        updateTask(value, index);
        cancelEdit();
    };

    return (
        <div className="input-group inputContainer">
            <input
                type="text"
                className="form-control"
                value={value}
                placeholder="Edit Task"
                onChange={(elmnt) => setValue(elmnt.target.value)}
            />
            <Button onClick={saveItem} className="btn-custom">Save</Button>
            <Button onClick={cancelEdit} className="btn-custom">Cancel</Button>
        </div>
    );
};

export default EditTask;
