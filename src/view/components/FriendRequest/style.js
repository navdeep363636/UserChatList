import styled from "styled-components";
export const Root = styled("div")``;
export const Wrapper = styled("div")`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 695px;
  background-color: #fff;
  border-color: #e5e6e9 #dfe0e4 #d0d1d5;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px 1px 1px;
  padding-bottom: 0;
`;

export const Header = styled("div")`
  border-bottom: 1px solid #e9e9e9;
  background-color: #fff;
  border-radius: 3px 3px 0 0;
  padding: 15px;
`;
export const HeadTitle = styled("h2")`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const ListWrapper = styled("div")`
  padding-left: 20px;
  padding-right: 20px;
`;

export const ListHolder = styled("ul")`
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0;
  padding-left: 0;
  list-style-type: none;
`;

export const RequestCard = styled("li")`
  padding-top: 10px;
  padding-bottom: 10px;
  border-width: 1px 0 0 0;
  border-color: #ebedf0;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ImageNameWrapper = styled("div")`
  display: flex;
  align-items: center;
`;
export const ImageWrapper = styled("div")`
  margin-right: 10px;
  img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    display: block;
  }
`;
export const InfoWrapper = styled("div")``;
export const PersonName = styled("h3")`
  color: #385898;
  font-weight: bold;
  margin: 0;
`;
export const Mutual = styled("p")`
  color: #606770;
  font-size: 14px;
  margin: 0;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  align-items: center;
`;
export const BlueBtn = styled("bitton")`
  border: 1px solid;
  border-radius: 2px;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  justify-content: center;
  padding: 0 8px;
  position: relative;
  text-align: center;
  text-shadow: none;
  background-color: #4267b2;
  border-color: #4267b2;
  color: #fff;
  height: 24px;
  display: flex;
  align-items: center;
  i {
    margin-right: 4px;
  }
`;
export const GreyBtn = styled("button")`
  border: 1px solid;
  border-radius: 2px;
  font-size: 12px;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
  justify-content: center;
  padding: 0 8px;
  position: relative;
  text-align: center;
  text-shadow: none;

  background-color: #f5f6f7;
  border-color: #ccd0d5;
  color: #4b4f56;
  margin-left: 4px;
  height: 24px;
  &:hover {
    background-color: #ebedf0;
  }
`;
