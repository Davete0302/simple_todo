import React, { useState, FC, useEffect } from 'react';

import TextField from "@mui/material/TextField";

const TodoListUI: FC = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('task')??'');
       console.log(items)
    }, []);

    return (
        <TextField type="text" label="$" variant="outlined" name="task" fullWidth onChange={()=>console.log('test')}/>
    );
}

export default TodoListUI;