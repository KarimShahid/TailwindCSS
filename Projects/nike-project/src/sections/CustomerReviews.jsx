import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <>
      <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="text-info m-auto mt-4 max-w-lg text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          necessitatibus numquam nam, sint omnis dignissimos maxime veniam
          doloremque tenetur harum quisquam ut consectetur velit dolorem
          reiciendis voluptatibus. Magni, hic ipsa.
        </p>

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard
              key="review"
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;
