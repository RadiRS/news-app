import React from 'react';
import styled from 'styled-components/native';
import { Images, Fonts } from '../../../themes';
import { formatTime } from '../../../helpers';

const Section = props => {
  const { searchResult } = props;
  const {
    multimedia = [],
    title,
    byline = {},
    published_date,
    headline,
    pub_date
  } = props.article;

  if (searchResult) {
    return (
      <Container>
        <Content>
          <Title numberOfLines={2}>{headline.main}</Title>
          <Author>{byline.original}</Author>
          <Date>{formatTime(pub_date)}</Date>
        </Content>
        <Cover>
          {multimedia.length > 1 ? (
            <Image
              source={{ uri: `https://static01.nyt.com/${multimedia[3].url}` }}
            />
          ) : (
            <Image source={{ uri: Images.noImage }} />
          )}
        </Cover>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <Title numberOfLines={2}>{title}</Title>
        <Author>{byline}</Author>
        <Date>{formatTime(published_date)}</Date>
      </Content>
      <Cover>
        {multimedia.length ? (
          <Image source={{ uri: multimedia[3].url }} />
        ) : (
          <Image source={{ uri: Images.noImage }} />
        )}
      </Cover>
    </Container>
  );
};

export default Section;

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 150px;
  border-radius: 14px;
  margin: 10px 20px 10px 20px;
  elevation: 10;
`;

const Content = styled.View`
  flex: 0.7;
  padding-left: 10px;
`;

const Cover = styled.View`
  flex: 0.3;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 14px;
`;

const Title = styled.Text`
  font-family: ${Fonts.type.bold};
  font-size: 22px;
  font-weight: bold;
`;

const Author = styled.Text`
  font-family: ${Fonts.type.bold};
  color: #b8bece;
  font-size: 15px;
  font-weight: ${Fonts.weight.large};
  margin-top: 2px;
`;

const Date = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: ${Fonts.weight.large};
  margin-top: 2px;
`;
