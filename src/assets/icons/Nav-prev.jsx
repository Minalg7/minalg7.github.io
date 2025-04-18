function NavPrev({className}) {
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
        transform="rotate(90 23 23)"
        stroke={className}
        stroke-width="2"
      />
      <g clip-path="url(#clip0_392_286)">
        <path
          d="M26.873 15.852L19.7407 23L26.873 30.148L24.6773 32.3438L15.3335 23L24.6773 13.6562L26.873 15.852Z"
          fill={className}
        />
      </g>
      <defs>
        <clipPath id="clip0_392_286">
          <rect
            width="37.375"
            height="37.375"
            fill="white"
            transform="matrix(0 1 -1 0 40.25 4.3125)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default NavPrev;
