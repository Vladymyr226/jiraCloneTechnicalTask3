import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { stateInStore, usersToDo } from '../types/types';
import { CardItem } from './card';

export const Board = (props: any) => {

  const selectorStateToDo: any = useSelector<stateInStore>((state) => state.toDo);
  const selectorStateInProgress: any = useSelector<stateInStore>((state) => state.inProgress);
  const selectorStateDone: any = useSelector<stateInStore>((state) => state.done);

  return (
    <>
      <Grid item xs={12} >
        <div className='board'>
          <span>
            Board
          </span>
        </div>


        <Grid className='todo_border' container justifyContent="space-between" wrap="nowrap" spacing={0}>
          {
            ["To do", "In progress", "Done"].map((status: string, index: number) => (
              <Grid className='ticket_board_width' key={index} item>
                <div className='board_status'>
                  <span>
                    {status}
                  </span>
                </div>

                {index === 0 && selectorStateToDo.map((toDo: usersToDo, indexFromToDo: number) => (
                  <CardItem key={indexFromToDo} className={"ticket_board"} checkSubheader={false} moveTicketNext={props.moveTicketNext} toDo={toDo} indexFromToDo={indexFromToDo} />
                ))
                }
                {index === 1 && selectorStateInProgress.map((inProgress: usersToDo, indexFromInProgress: number) => (
                  <CardItem key={indexFromInProgress} className={"ticket_board"} checkSubheader={false} moveTicketNext={props.moveTicketNextInProgress} toDo={inProgress} indexFromToDo={indexFromInProgress} />
                ))
                }
                {index === 2 && selectorStateDone.map((done: usersToDo, indexFromDone: number) => (
                  <CardItem key={indexFromDone} className={"ticket_board"} checkSubheader={false} toDo={done} indexFromToDo={indexFromDone} />
                ))
                }
              </Grid>)
            )}
        </Grid>
      </Grid>
    </>
  )
}