import styled from "styled-components";

export const CustomButton = styled.button`
   {
    background-color: ${(props) => props.color};
    color: #ffffff;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: 15px;
  }
`;
