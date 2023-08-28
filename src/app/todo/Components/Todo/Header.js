import styled from "styled-components";

const Header = () => {
  return (
    <Div>
      <span>TO DO LIST</span>
    </Div>
  );
};

export default Header;

const Div = styled.div`
  width: 100%;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
`;