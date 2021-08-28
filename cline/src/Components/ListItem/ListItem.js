import { PlayArrow, ThumbUpAltOutlined, ThumbDownOutlined, Add } from "@material-ui/icons";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import "./ListItem.scss";

function ListItem({index, item}) {
  const[isHover, setIsHover] = useState(false);
  const[movie, setMovie] = useState({});

  useEffect(()=>{
    const getMovie = async ()=>{
      try{
        const res = await axios.get("/movie/find/"+item,
        {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjM3MzBjNjJhMjgyMWRmY2VhODkzMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTcyNzg5OSwiZXhwIjoxNjMwMTU5ODk5fQ.RcYyDZJaqLysFGjxuWWwKzOPUg4L35lgI4L9Du6JmS8",
          },
        }
        )
        setMovie(res.data)
      }catch(err){
        console.log(err)
      }
    }

    getMovie()
  },[item])
  
  return (
    <Link to={{pathname:"/watch", movie: movie}}>
    <div className="listItem"
    style={{left:isHover && index * 225 - 50 + index * 2.5}} 
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    >
      <img
        src={movie.img}
        alt=""
      />
      {isHover &&(
        <>
        <video src={movie.trailer} autoPlay={true} loop/>
        <div className="itemInfo">
        <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownOutlined/>

        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          <span className="limit">{movie.limit}</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">
          {item.desc}
        </div>
        <div className="genre">{item.genre}</div>
    </div>
    </>
      )}
      </div>
      </Link>
        );
}

export default ListItem;
