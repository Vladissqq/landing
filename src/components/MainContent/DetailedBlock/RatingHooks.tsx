import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";

export const Rating: React.FC = () => {
  let [star, setStar] = useState<number>(1);
  const onStarClick = (nextVal: number, prevVal: number, name: string) => {
    setStar(nextVal);
  };
  return (
    <div>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={star}
        emptyStarColor={"#FF4646"}
        onStarClick={onStarClick}
      />
    </div>
  );
};
