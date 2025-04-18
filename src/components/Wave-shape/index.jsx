function WaveShape({ bgColor }) {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 1440 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H1440V102.5C1176.64 173.18 1019.16 174.484 720 102.5C436.561 30.2743 278.926 30.7743 0 102.5V0Z"
        fill={bgColor}
      />
    </svg>
  );
}

export default WaveShape;
