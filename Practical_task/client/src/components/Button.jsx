export default function Button({ children, ...props }) {
  return (
    <button
      className={`p-2 mt-4 w-full ${
        props.disabled ? "bg-[gray]" : "bg-[#F0E130]"
      } text-[black]`}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
}
