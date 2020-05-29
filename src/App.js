import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header";
import PhotoOfDay from "./components/PhotoOfDay";
import Footer from "./components/Footer";
import DatePicker from "react-datepicker";
import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
const App = () => {
  const todaysDate = new Date().toISOString().split("T")[0];

  const [photo, setPhoto] = useState();
  const [photoTitle, setPhotoTitle] = useState();
  const [date, SetDate] = useState();
  const [copyright, SetCopyright] = useState();
  const [explanation, SetExplanation] = useState();
  const [newDate, setNewDate] = useState(todaysDate);
  // const [photoByDate, setPhotoByDate] = useState();

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

        if (copyright === undefined) {
          SetCopyright(`Courtesy of NASA`);
        }
      })
      .catch((error) => {
        console.log("Bruh!", error);
      });
  }, [photo]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.nasa.gov/planetary/apod?api_key=QggpebSBP4FPHMTKOnQHVfwDmLbGwHNTmvkajFqH&date=${newDate}`
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log("Bruh!", error);
  //     });
  // });

  const handleChange = (date) => {
    setNewDate(date);
    SetDate(date);
    console.log("test", date);
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

      {/* <DatePicker selected={newDate} onChange={handleChange} /> */}

      <Footer />
    </div>
  );
};

export default App;
