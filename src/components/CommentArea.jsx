import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization: "Bearer your-auth-token-goes-here",
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((comments) => {
            setComments(comments);
            setIsLoading(false);
            setIsError(false);
          });
        } else {
          console.log("error");
          setIsLoading(false);
          setIsError(true);
        }
      })
      .catch((error) => {
        console.log("error");
        setIsLoading(false);
        setIsError(true);
      });
  }, [props.asin]);

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
