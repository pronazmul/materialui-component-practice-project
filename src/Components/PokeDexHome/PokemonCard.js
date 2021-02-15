import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  cardImage: {
    height: "150px"
  }
}));

const PokemonCard = (props) => {
  // console.log(props);
  const classes = useStyle();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.cardImage}
          image="https://i.ibb.co/3v4qVhN/pro-nazmul.jpg"
          title="Poemon Image"
        />
        <CardContent>
          <Typography variant="body2">{props.name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
