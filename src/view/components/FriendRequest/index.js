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
  Mutual,
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
                <BlueBtn>Confirm</BlueBtn>
                <GreyBtn>Cancel</GreyBtn>
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
          {friendSuggestion.map(({ mutule = false }) => (
            <RequestCard>
              <ImageNameWrapper>
                <ImageWrapper>
                  <img src={pic} alt="" />
                </ImageWrapper>
                <InfoWrapper>
                  <PersonName>User Name</PersonName>
                  {mutule && (
                    <Mutual>
                      <i className="fas fa-user-friends" /> {mutule} mutual
                      friends
                    </Mutual>
                  )}
                </InfoWrapper>
              </ImageNameWrapper>
              <ButtonWrapper>
                <BlueBtn>
                  <i className="fas fa-user-plus" /> Add Friend
                </BlueBtn>
                <GreyBtn>Cancel</GreyBtn>
              </ButtonWrapper>
            </RequestCard>
          ))}
        </ListHolder>
      </ListWrapper>
    </Wrapper>
  </Root>
);
