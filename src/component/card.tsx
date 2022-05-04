import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { useSelector, useStore } from "react-redux";

export const CardItem = (props: any) => {

  const state = useStore()
  const selectorStateUser: any = useSelector<any>((state) => state.user);

  const arr: any = state.getState();

  return (
    <Card className={props.className} onClick={() => props.moveTicketNext(props.indexFromToDo)} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: arr.arrayWithColors[Math.floor(Math.random() * arr.arrayWithColors.length)][700] }} aria-label="recipe">
            {selectorStateUser[props.toDo?.userId - 1]?.name[0]}
            {selectorStateUser[props.toDo?.userId - 1]?.username[0]}
          </Avatar>
        }
        subheader={
          props.checkSubheader ? (
            <>
              <div style={{ float: "left" }}>{props.toDo?.title}</div>
              <div style={{ float: "right" }}>{props.status}</div>
            </>
          ) : (props.toDo?.title)
        }
      />
    </Card >
  )
}