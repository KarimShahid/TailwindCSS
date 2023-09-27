import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <>
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1 ">
          <img
            src={offer}
            alt=""
            width={773}
            height={687}
            className="object-contain w-full"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red">Special</span> offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            soluta perspiciatis ratione tempora? Sapiente ut quod nam quis
            deleniti eaque nobis optio, beatae iste animi sint nemo enim
            eligendi voluptate.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            accusamus voluptas esse ipsum eius, est molestias dolor sequi nam
            soluta repudiandae! Eveniet est vero consequatur eum tenetur
            veritatis ad itaque!
          </p>

          <div className=" flex flex-wrap gap-4 mt-11">
            <Button label="Shop Now" iconURL={arrowRight} />
            <Button
              label="Learn More"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
