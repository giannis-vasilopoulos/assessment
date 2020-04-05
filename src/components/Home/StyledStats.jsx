import styled from "styled-components";

const StyledStats = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => (props.percentage ? props.percentage / 10 : null)}%;
  display: block;
  border-radius: 50px;
  height: 5px;
  transition: all ease 0.5s;
`;

export default StyledStats;
