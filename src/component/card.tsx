import { red, green, orange, indigo, cyan, amber } from '@mui/material/colors';
// import 
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from "react-redux";
import { createActionSetInProgress, createActionSetToDo, createActionSetDone, createActionSetUser } from '../redux/actions/actions';

export default function ToDo() {

  const dispatch = useDispatch();
  const state = useStore()

  const selectorStateToDo: any = useSelector<any>((state) => state.toDo);
  const selectorStateInProgress: any = useSelector<any>((state) => state.inProgress);
  const selectorStateDone: any = useSelector<any>((state) => state.done);
  const selectorStateUser: any = useSelector<any>((state) => state.user);

  async function fetchToDo() {
    const toDoUrl =
      "https://jsonplaceholder.typicode.com/todos";

    try {
      const response = await fetch(toDoUrl, {
        method: "GET",
      });
      const data = await response.json();

      console.log("data: ", data);

      //Throw actions in reducer
      dispatch(createActionSetToDo(data));
    } catch (err) {
      console.log("Not Found: ", err);
    }
  }
  async function fetchUser() {
    const usersUrl =
      "https://jsonplaceholder.typicode.com/users";

    try {
      const response = await fetch(usersUrl, {
        method: "GET",
      });
      const data = await response.json();

      console.log("data: ", data);

      //Throw actions in reducer
      dispatch(createActionSetUser(data));
    } catch (err) {
      console.log("Not Found: ", err);
    }
  }
  useEffect(() => {
    fetchToDo();
    fetchUser()
  }, []);

  function moveTicketNext(indexFromToDo: any): void {

    const arr: any = state.getState();

    dispatch(createActionSetInProgress([...arr.inProgress, selectorStateToDo[indexFromToDo]]));
    dispatch(createActionSetToDo(selectorStateToDo.filter((item: any) => item !== selectorStateToDo[indexFromToDo])));
  }
  function moveTicketNextInProgress(indexFromInProgress: any): void {

    const arr: any = state.getState();

    dispatch(createActionSetDone([...arr.done, selectorStateInProgress[indexFromInProgress]]));
    dispatch(createActionSetInProgress(selectorStateInProgress.filter((item: any) => item !== selectorStateInProgress[indexFromInProgress])));
  }

  const arrayWithColors = [red, green, orange, indigo, cyan, amber]

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
        <div className='board'>
          <span>
            Board
          </span>
        </div>

        <Grid className='todo_border' container justifyContent="center" wrap="nowrap" spacing={0}>
          {
            ["To do", "In progress", "Done"].map((item: string, index: number) => (
              <Grid className='width_ticket' key={index} item>
                <div className='board_status'>
                  <span>
                    {item}
                  </span>
                </div>
                {index === 0 && selectorStateToDo.map((toDo: any, indexFromToDo: number) => (
                  <Card className='ticket' key={indexFromToDo} onClick={() => moveTicketNext(indexFromToDo)} sx={{ maxWidth: 345 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: arrayWithColors[Math.floor(Math.random() * arrayWithColors.length)][700] }} aria-label="recipe">
                          {selectorStateUser[toDo?.userId]?.name[0]}
                          {selectorStateUser[toDo?.userId]?.username[0]}
                        </Avatar>
                      }
                      subheader={toDo?.title}
                    />
                  </Card>
                ))
                }
                {index === 1 && selectorStateInProgress.map((inProgress: any, indexFromInProgress: number) => (
                  <Card className='ticket' key={indexFromInProgress} onClick={() => moveTicketNextInProgress(indexFromInProgress)} sx={{ maxWidth: 345 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: arrayWithColors[Math.floor(Math.random() * arrayWithColors.length)][700] }} aria-label="recipe">
                          {selectorStateUser[inProgress?.userId]?.name[0]}
                          {selectorStateUser[inProgress?.userId]?.username[0]}
                        </Avatar>
                      }
                      subheader={inProgress?.title}
                    />
                  </Card>
                ))
                }
                {index === 2 && selectorStateDone.map((done: any, indexFromDone: number) => (
                  <Card className='ticket' key={indexFromDone} sx={{ maxWidth: 345 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: arrayWithColors[Math.floor(Math.random() * arrayWithColors.length)][700] }} aria-label="recipe">
                          {selectorStateUser[done?.userId]?.name[0]}
                          {selectorStateUser[done?.userId]?.username[0]}
                        </Avatar>
                      }
                      subheader={done?.title}
                    />
                  </Card>
                ))
                }
              </Grid>)
            )}
        </Grid>

      </Grid>
    </Grid>
  );
}