export default function FormInput({ children, inputType, placeholder }) {
  return (
    <div className="rounded-full border-3 border-neutral-800/70 dark:border-amber-300/70 p-1.5 px-2 flex items-center gap-2">
      {children}
      <input
        type={inputType}
        className="border-none outline-none text-sm text-neutral-800/70 dark:text-amber-300/70"
        placeholder={placeholder}
      />
    </div>
  );
}
