import { FaTimes,FaEdit } from "react-icons/fa";
import { useContext } from "react";

//
import Card from "../UI/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackIteam({ item }) {
  const { handleDelete,editFeedbackHandler } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={()=>  editFeedbackHandler(item)} className="edit">
        <FaEdit color="purple"/>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedBackIteam;
