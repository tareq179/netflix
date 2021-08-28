import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import './Featured.scss';
import axios from "axios";

function Featured({type}) {
  const [content, setContent] = useState({});

  useEffect(()=>{
    const getRandomContent = async ()=>{
      try{
        const res = await axios.get(`/movie/random/?type=${type}`,
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjM3MzBjNjJhMjgyMWRmY2VhODkzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTcyNzg5OSwiZXhwIjoxNjMwMTU5ODk5fQ.RcYyDZJaqLysFGjxuWWwKzOPUg4L35lgI4L9Du6JmS8",
          },
        }
        )
        setContent(res.data[0])
      }catch(err){
        console.log(err)
      }
    }

    getRandomContent()
  },[type])
  return (
    <div className="Featured">
      {type && (
        <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option >Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
        </div>
      )}
      <img  src={content.img} alt="" />
      <div className="info">
        <img
          src={content.imgTitle}
          alt=""
        />
        <span className="desc">
          {content.desc}
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
