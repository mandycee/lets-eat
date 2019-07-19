import React from 'react';
import styled from 'styled-components';

const InfoDiv = styled.div`
  text-align: center;
  border: 2px solid #eee;
  background-color: #eee;
  color: #777;
  font-family: Arial;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
`;
const InfoDescription = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75%;
`;
const Name = styled.h3`
  margin: 0;
  font-weight: normal;
  text-align: left;
  font-size: 1em;
  flex-grow: 3;
`;
const Rating = styled.p`
  margin: 0;
  text-align: right;
  flex-grow: 2;
`;

const Location = styled.p`
  margin: 0;
  flex-grow: 2;
  text-align: left;
`;
const Button = styled.button`
  color: ${props => props.color || '#00cc96'};
  border-radius: 100%;
  border: 4px solid ${props => props.color || '#00cc96'}
  background-color: #eee;
  width: 100px;
  height: 100px;
  font-size: 60px;
  font-weight: bold;
`;

const TinderBtns = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;

function InfoCard(props) {
  const { choice, displayNextChoice } = props;
  return (
    <div>
      <InfoDiv key={choice.id}>
        <div>
          <img
            src={choice.image_url}
            alt={choice.name}
            width={500}
            height={300}
          />
        </div>
        <InfoDescription>
          <Name>{choice.name}</Name>
          <Rating>Rating: {choice.rating}</Rating>
          <Location>{choice.location.address1}</Location>
        </InfoDescription>
        <TinderBtns>
          <Button onClick={displayNextChoice} color="palevioletred">
            X
          </Button>
          <Button onClick={displayNextChoice}>√</Button>
        </TinderBtns>
      </InfoDiv>
    </div>
  );
}

export default InfoCard;
