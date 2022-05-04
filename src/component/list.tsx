import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { stateInStore, usersToDo } from '../types/types';
import { CardItem } from './card';

export const TicketList = (props: any) => {

  const selectorStateToDo: any = useSelector<stateInStore>((state) => state.toDo);
  const selectorStateInProgress: any = useSelector<stateInStore>((state) => state.inProgress);
  const selectorStateDone: any = useSelector<stateInStore>((state) => state.done);

  return (
    <>
      <Grid item xs={12}>
        <div className='board'>
          <span>
            Ticket list
          </span>
        </div>
      </Grid>

      <Grid className='todo_border' container spacing={0}>
        {
          ["To do", "In progress", "Done"].map((status: string, index: number) => (
            <Grid className='ticket_list_width' key={index} item>
              {index === 0 && selectorStateToDo.map((toDo: usersToDo, indexFromToDo: number) => (
                <CardItem key={indexFromToDo} className={"ticket_list"} checkSubheader={true} moveTicketNext={props.moveTicketNext} toDo={toDo} indexFromToDo={indexFromToDo} status={status} />
              ))
              }
              {index === 1 && selectorStateInProgress.map((inProgress: usersToDo, indexFromInProgress: number) => (
                <CardItem key={indexFromInProgress} className={"ticket_list"} checkSubheader={true} moveTicketNext={props.moveTicketNextInProgress} toDo={inProgress} indexFromToDo={indexFromInProgress} status={status} />
              ))
              }
              {index === 2 && selectorStateDone.map((done: usersToDo, indexFromDone: number) => (
                <CardItem key={indexFromDone} className={"ticket_list"} checkSubheader={true} toDo={done} indexFromToDo={indexFromDone} status={status} />
              ))
              }
            </Grid>)
          )}
      </Grid>
    </>
  )
}