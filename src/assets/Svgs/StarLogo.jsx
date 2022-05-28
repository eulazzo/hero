import styled from "styled-components";

const Svg = styled.svg`
  width: 4rem;
  height: auto;
  overflow: visible;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke:"#fff" ;

  g {
    path {
      stroke: "#fff";
    }
  }
`;

const StarLogo = (props) => {
  return (
    <Svg height={48} viewBox="0 0 24 24" width={48} fill="none" {...props}>
      <g fill="none">
        <path d="M0 0h24v24H0V0z" />
        <path d="M0 0h24v24H0V0z" />
      </g>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </Svg>
  );
};

export default StarLogo;
