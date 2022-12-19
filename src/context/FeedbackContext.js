
import { createContext, useEffect, useState } from "react"

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  //Spinner
  const [isLoading,setIsLoading] = useState(true);
  //Feedback Array
  const [feedback, setFeedback] = useState([]);

  useEffect(()=>{
    fetchFeedbackData();
  },[]);

  //Fetch data from JSON SERVER
  const fetchFeedbackData = async() => {
    let response = await fetch(`/feedback`);
    let feedbackData = await response.json();
    setFeedback(feedbackData);
    setIsLoading(false);
  }

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
  const updateFeedbackItemHandler = async (id, updItem) => {
    let response = await fetch(`/feedback/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(updItem)
    })

    let data = await response.json();

    setFeedback(feedback.map((item)=> item.id === id ? {...item,...data} : item))
  }

  //Delete Existing Feedback
  const handleDelete = async (id) => {
    if (window.confirm("Are You Sure You Want To Delete This Item?")) {
      await fetch(`/feedback/${id}`,{ method: "DELETE" })

      let filteredFeedbackData = feedback.filter((item) => {
        return item.id !== id;
      });
      setFeedback(filteredFeedbackData);
    }
  };

  //Add New Feedback
  const handleNewFeedback = async (newFeedback) => {
    let response = await fetch(`/feedback`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFeedback)
    })

    let data = await response.json();;

    setFeedback([...feedback,data]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
