import "./Home.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import { useEffect, useState } from "react";
import axios from "axios";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}& ${
            genre ? "genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjM3MzBjNjJhMjgyMWRmY2VhODkzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTcyNzg5OSwiZXhwIjoxNjMwMTU5ODk5fQ.RcYyDZJaqLysFGjxuWWwKzOPUg4L35lgI4L9Du6JmS8",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list)=>(
          <List list={list} />
      ))}
    </div>
  );
}

export default Home;
