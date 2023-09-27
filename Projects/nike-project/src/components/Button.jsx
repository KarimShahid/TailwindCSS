const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg 
        leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
        {iconURL && (
          <img src={iconURL} alt="ArrowRight icon" className="ml-2 w-5" />
        )}
      </button>
    </>
  );
};

export default Button;
