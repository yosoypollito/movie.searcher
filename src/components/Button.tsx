interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="flex border-none px-4 py-1 rounded-xl gap-2 items-center bg-gray-200 w-min text-black font-semibold uppercase text-xs"
      {...props}
    >
      {children}
    </button>
  );
}
