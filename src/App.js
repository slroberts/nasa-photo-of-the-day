import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import PhotoOfDay from "./components/PhotoOfDay";
import Footer from "./components/Footer";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
const App = () => {
  const [photo, setPhoto] = useState();
  const [photoTitle, setPhotoTitle] = useState();
  const [date, SetDate] = useState();
  const [copyright, SetCopyright] = useState();
  const [explanation, SetExplanation] = useState();
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=QggpebSBP4FPHMTKOnQHVfwDmLbGwHNTmvkajFqH`
      )
      .then((response) => {
        console.log(response.data);
        setPhoto(response.data.url);
        setPhotoTitle(response.data.title);
        SetDate(response.data.date);
        SetCopyright(response.data.copyright);
        SetExplanation(response.data.explanation);
      })
      .catch((error) => {
        console.log("Bruh!", error);
      });
  }, [photo]);

  const handleChange = (date) => {
    setNewDate(date);
  };

  return (
    <div className="App">
      <Header />

      <PhotoOfDay
        title={photoTitle}
        src={photo}
        alt={photoTitle}
        explanation={explanation}
        date={date}
        copyright={copyright}
      />

      <DatePicker selected={newDate} onChange={handleChange} />

      <Footer />
    </div>
  );
};

export default App;
