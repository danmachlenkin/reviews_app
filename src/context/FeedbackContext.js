import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //Feedback Array
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is Item number 1 from context",
      rating: 9,
    },
    {
      id: 2,
      text: "This is Item number 2 from context",
      rating: 5,
    },
    {
      id: 3,
      text: "This is Item number 3 from context",
      rating: 7,
    },
  ]);

  //Edit Feedback state
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    isEditMode: false,
  });

  //Edit Feedback Handler
  const editFeedbackHandler = (editedItem) => {
    setFeedbackEdit({
      item: {
        id: editedItem.id,
        text: editedItem.text,
        rating: editedItem.rating,
      },
      isEditMode: true,
    });
  };

  //Update feedback Item
  const updateFeedbackItemHandler = (id, updItem) => {
    setFeedback(feedback.map((item)=> item.id === id ? {...item,...updItem} : item))
  }

  //Delete Existing Feedback
  const handleDelete = (id) => {
    if (window.confirm("Are You Sure You Want To Delete This Item?")) {
      let filteredFeedbackData = feedback.filter((item) => {
        return item.id !== id;
      });
      setFeedback(filteredFeedbackData);
    }
  };

  //Add New Feedback
  const handleNewFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        handleDelete,
        handleNewFeedback,
        editFeedbackHandler,
        updateFeedbackItemHandler,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
