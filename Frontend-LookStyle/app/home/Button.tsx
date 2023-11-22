type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
};

const Button = ({ type, title, variant }: ButtonProps) => {

  return (
    <button
      type={type}
      className={`flexCenter rounded-2xl h-11 border-none transition-all ${variant}`}
    >
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
