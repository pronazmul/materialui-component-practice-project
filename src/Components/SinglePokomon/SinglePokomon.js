import { useParams } from "react-router-dom";

const SinglePokomon = () => {
  const { key } = useParams();

  return `This is single Pokomon id: ${key}`;
};

export default SinglePokomon;
