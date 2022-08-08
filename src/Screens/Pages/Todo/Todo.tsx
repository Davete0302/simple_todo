import React, { FC, useState, useEffect, useCallback, ChangeEvent } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import "./style.css"
import { useLocalstorageState } from "rooks";

const TodoUI: FC = () => {
  const [taskList, setTaskList] = useLocalstorageState('tasks', [{}]);
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [taskError, setTaskError] = useState(false);


  const addTask = () => {
    console.log('clicked')
    if (task.length > 0) {
      setTaskList([...taskList, { "task": task, "deadline": deadline, "completed": '', checked: false }]);
      setTask('');
      setDeadline('');
    } else {
      setTaskError(true)
    }

    console.log(JSON.stringify(taskList))
  };


  const updateTask = (value: any, index: any) => {
    const timestamp = Date.now(); // This would be the timestamp you want to format

    let formattedDAte = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);
    let newArr = [...taskList];
    newArr[index] = { "task": value.task, "deadline": value.deadline, "completed": formattedDAte, checked: true };

    setTaskList(newArr);
    localStorage.setItem('task', JSON.stringify(newArr))
  };


  const handleTypeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "task") {
      setTaskError(false)
      setTask(e.target.value);
    } else {
      if (e.target.value != null)
        setDeadline(e.target.value);
    }
  }, []);


  return (
    <Container >
      <Grid container spacing={2} alignItems="center" maxWidth="100%" justifyContent="center" marginTop={10}>
        <Grid item xs={12}>
          <TextField type="text" value={task} label="New Task" variant="outlined" name="task" fullWidth onChange={handleTypeChange} error={taskError} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            label="Deadline (in Days)"
            name="deadline"
            variant="outlined"
            fullWidth
            value={deadline}
            onChange={(handleTypeChange)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" endIcon={<SendIcon />} onClick={() => addTask()} fullWidth>
            Add Task
          </Button>
        </Grid>
      </Grid>


      <div className="todoList">
        <Divider />

        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <h3>Task List</h3>
          <Button color="error" variant="contained" onClick={() => setTaskList([{}])}>
            Clear List
          </Button>
        </Stack>


        <List sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
          {taskList?.map((value: any, index: any) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <div>
                <ListItem
                  key={value?.index}
                  disablePadding
                >
                  {index != 0 ?

                    <ListItemButton role={undefined} onClick={() => updateTask(value, index)}>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={value?.checked}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                          key={value?.taskno}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={`Task: ${value?.task}`} />
                      <ListItemText id={labelId} primary={`Deadline: ${value?.deadline} day/s `} />
                      <ListItemText id={labelId} primary={value.completed != '' ? `Completed: ${value?.completed}` : null} />
                    </ListItemButton>
                    : null}
                </ListItem>
              </div>
            );
          })}
        </List>


      </div>
      <div className="agreementfooter">
        <Grid container >
          <Grid item xs={6}>
            <Link href="/termsandconditions">Terms and Condition</Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="/privacyandpolicy">Privacy Policy</Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default TodoUI;