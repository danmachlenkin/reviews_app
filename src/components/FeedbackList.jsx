import { useContext } from "react";

//Components imports
import FeedBackIteam from "./FeedBackIteam";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length < 1)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {feedback.map((item) => {
        return <FeedBackIteam key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FeedbackList;
