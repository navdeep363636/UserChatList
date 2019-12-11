import React from "react";
import {
  Root,
  Wrapper,
  Header,
  HeadTitle,
  ListWrapper,
  ListHolder,
  RequestCard,
  ImageNameWrapper,
  ImageWrapper,
  InfoWrapper,
  PersonName,
  ButtonWrapper,
  BlueBtn,
  GreyBtn
} from "./style";
import { friendRequest, friendSuggestion } from "./mockData";
const pic =
  "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";
export default () => (
  <Root>
    <Wrapper>
      <Header>
        <HeadTitle>New Friend Requests</HeadTitle>
      </Header>
      <ListWrapper>
        <ListHolder>
          {friendRequest.map(() => (
            <RequestCard>
              <ImageNameWrapper>
                <ImageWrapper>
                  <img src={pic} alt="" />
                </ImageWrapper>
                <InfoWrapper>
                  <PersonName>User Name</PersonName>
                </InfoWrapper>
              </ImageNameWrapper>
              <ButtonWrapper>
                <BlueBtn>dfhd</BlueBtn>
                <GreyBtn>fedef</GreyBtn>
              </ButtonWrapper>
            </RequestCard>
          ))}
        </ListHolder>
      </ListWrapper>
    </Wrapper>
    <Wrapper>
      <Header>
        <HeadTitle>People you may know</HeadTitle>
      </Header>
      <ListWrapper>
        <ListHolder>
          {friendSuggestion.map(() => (
            <RequestCard>
              <ImageNameWrapper>
                <ImageWrapper>
                  <img src={pic} alt="" />
                </ImageWrapper>
                <InfoWrapper>
                  <PersonName>User Name</PersonName>
                </InfoWrapper>
              </ImageNameWrapper>
              <ButtonWrapper>
                <BlueBtn>
                  <i className="fas fa-user-plus" /> dfhd
                </BlueBtn>
                <GreyBtn>fedef</GreyBtn>
              </ButtonWrapper>
            </RequestCard>
          ))}
        </ListHolder>
      </ListWrapper>
    </Wrapper>
  </Root>
);
