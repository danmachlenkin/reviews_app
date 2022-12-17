import { useContext } from "react";

//Components imports
import FeedBackIteam from "./FeedBackIteam";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length < 1) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div>
      {feedback.map((item) => {
        return <FeedBackIteam key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FeedbackList;
