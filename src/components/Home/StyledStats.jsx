import styled from "styled-components";

const StyledStats = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => (props.percentage ? props.percentage / 10 : null)}%;
  // background: rgb(0, 0, 0);
  // background: linear-gradient(
  //   90deg,
  //   rgba(0, 0, 0, 1) 0%,
  //   rgba(0, 212, 255, 1) 100%
  // );
  display: block;
  border-radius: 50px;
  height: 5px;
  transition: all ease 0.5s;
`;

export default StyledStats;
