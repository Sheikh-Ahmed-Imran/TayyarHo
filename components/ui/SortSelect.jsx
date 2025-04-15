export function SortSelect({ options = [], value, onChange, ...props }) {
  return (
    <div className="relative">
      <select
        className="w-[209px] h-10 border bg-[rgba(255,255,255,0.70)] text-base text-black px-3 rounded-lg appearance-none"
        aria-label="Sort options"
        value={value}  // Use controlled value
        onChange={onChange}  // Ensure the change handler is passed
        {...props}
      >
        <option value="" disabled>
          Sort by
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <svg
        className="absolute right-[8px] top-[8px] w-[24px] h-[24px] pointer-events-none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.27592 8.65194C6.44783 8.48655 6.67838 8.39617 6.91689 8.40067C7.1554 8.40517 7.38237 8.50418 7.54792 8.67594L11.9999 13.4015L16.4519 8.67594C16.5328 8.58673 16.6309 8.51467 16.7401 8.46403C16.8494 8.41339 16.9678 8.3852 17.0881 8.38113C17.2085 8.37706 17.3285 8.3972 17.4409 8.44035C17.5534 8.4835 17.6561 8.54878 17.7428 8.63233C17.8296 8.71587 17.8987 8.81599 17.946 8.92673C17.9934 9.03748 18.0181 9.15661 18.0185 9.27705C18.019 9.3975 17.9953 9.51682 17.9488 9.62794C17.9023 9.73905 17.834 9.83971 17.7479 9.92394L12.6479 15.3239C12.564 15.411 12.4633 15.4803 12.352 15.5277C12.2406 15.575 12.1209 15.5994 11.9999 15.5994C11.8789 15.5994 11.7592 15.575 11.6479 15.5277C11.5365 15.4803 11.4359 15.411 11.3519 15.3239L6.25192 9.92394C6.08653 9.75203 5.99615 9.52149 6.00065 9.28298C6.00515 9.04446 6.10416 8.81749 6.27592 8.65194Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
