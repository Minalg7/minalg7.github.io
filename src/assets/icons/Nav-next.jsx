function NavNext({className}) {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="23"
        cy="23"
        r="22"
        transform="rotate(-90 23 23)"
        stroke={className}
        stroke-width="2"
      />
      <g clip-path="url(#clip0_392_281)">
        <path
          d="M19.127 30.148L26.2593 23L19.127 15.852L21.3227 13.6562L30.6665 23L21.3227 32.3438L19.127 30.148Z"
          fill={className}
        />
      </g>
      <defs>
        <clipPath id="clip0_392_281">
          <rect
            width="37.375"
            height="37.375"
            fill="white"
            transform="matrix(0 -1 1 0 5.75 41.6875)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default NavNext;
