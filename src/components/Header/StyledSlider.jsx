import styled from "styled-components";

const StyledSlider = styled.div`
  min-height: 265px;
  text-align: center;
  background: url(${(props) => (props.bg ? props.bg : null)}) center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
`;

export default StyledSlider;
