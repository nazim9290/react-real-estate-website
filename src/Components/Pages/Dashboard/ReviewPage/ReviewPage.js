import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import useAuth from "./../../../../Hooks/useAuth";
import { axios } from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: "80%",
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    backgroundColor: "#ff5a3c",
    color: "white",
  },
};

const ReviewPage = () => {
  const { user } = useAuth();
  const [ratingValue, setRatingValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);
  const userReviews = useRef();

  const handleClick = (value) => {
    setRatingValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleReview = (e) => {
    e.preventDefault();
    const reviewData = {
      name: user.displayName,
      img: user.photoURL,
      email: user.email,
      occupation: "Business",
      rating: ratingValue,
      reviews: userReviews.current.value,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          alert("successfully added");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleReview}>
      <div style={styles.container}>
        <h6> Review Us </h6>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || ratingValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        <textarea
          placeholder="What's your experience?"
          style={styles.textarea}
          ref={userReviews}
        />

        <button style={styles.button} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewPage;
