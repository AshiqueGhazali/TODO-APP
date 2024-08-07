import React from 'react'
import { ListGroup ,Button} from 'react-bootstrap'
import { FaTrash, FaTimes, FaEdit } from 'react-icons/fa';

const ListTask = ({task,removeTask,index, startEditTask}) => {  
  const removeItem = ()=>{
    removeTask(index)
  }
  const editItem = () => {
    startEditTask(index);
};

  return (
    <>
      <div className="taskList">
        <ListGroup className="custom-list-group">
          <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <span className="flex-grow-1">{task.title}</span>
            <Button className="custom-edit-btn" onClick={editItem} variant="light" size="sm"><FaEdit /></Button>
            <Button className="custom-remove-btn" onClick={removeItem} variant="danger" size="sm"><FaTimes /></Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}

export default ListTask