////////////////////////////////////////////F

////////////////////////////////////////////

////////////////////////////////////////////
import "../App.css";
////////////////////////////////////////////
import Header from "../components/Header";
import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
import AboutIconLink from "../components/AboutIconLink";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
      <AboutIconLink />
    </>
  );
}

export default App;
