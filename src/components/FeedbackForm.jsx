import React, { useState, useContext, useEffect } from "react";

//
import Button from "../UI/Button";
import Card from "../UI/Card";
import SelectRating from "./SelectRating";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { handleNewFeedback, feedbackEdit,updateFeedbackItemHandler } = useContext(FeedbackContext);

  const textChangeHandler = (el) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setMessage("Review must be at least 10 characters long");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(el.target.value);
  };

  useEffect(() => {
    if (feedbackEdit.isEditMode === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleSubmit = (el) => {
    el.preventDefault();
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating,
      };
      if (feedbackEdit.isEditMode === true) {
        updateFeedbackItemHandler(feedbackEdit.item.id,newFeedBack)
      } else {
        handleNewFeedback(newFeedBack);
      }
      setText("");
      setBtnDisabled(true);
    }
  };

  return (
    <Card>
      <SelectRating select={(rate) => setRating(rate)} />
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            value={text}
            onChange={textChangeHandler}
            type="text"
            placeholder="write your review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
