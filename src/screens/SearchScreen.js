import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';

// Actions
import { searchArticles } from '../stores/actions';

// Components
import { NewsLoader } from '../components/loader';
import FlatList from '../components/flastlist';
import SearchBox from '../components/common/searchbox';
import Article from '../components/article/section';
import { Colors } from '../themes';

class SearchScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  state = {
    query: '',
    sort: '',
    sortOptions: ['newest', 'oldest']
  };

  handlePressSearch = () => {
    const { query } = this.state;
    if (query) this.props.searchArticles(query);
  };

  handleTextChange = query => {
    this.setState({ query });
  };

  handlePressSort = sort => {
    const { query } = this.state;

    if (this.state.sort === sort) {
      this.setState({ sort: '' });
      this.props.searchArticles(query);
    } else {
      this.setState({ sort });
      this.props.searchArticles(query, sort);
    }
  };

  renderItemArticle = ({ item }) => (
    <TouchableOpacity onPress={() => this.handlePressArticle(item)}>
      <Article searchResult article={item} />
    </TouchableOpacity>
  );

  renderArticle = data => (
    <FlatList
      data={data}
      renderItem={this.renderItemArticle}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 10 }}
    />
  );

  renderSortable = data => (
    <Wrapper>
      {data.map((sort, index) => (
        <SortOptions
          key={index}
          onPress={() => this.handlePressSort(sort)}
          style={{ color: this.state.sort === sort ? 'blue' : 'white' }}
        >
          {sort}
        </SortOptions>
      ))}
    </Wrapper>
  );

  handlePressArticle = item => {
    this.props.navigation.navigate('Article', { url: item.web_url });
  };

  render() {
    const { query, sortOptions } = this.state;
    const { searchLoading, searchResults } = this.props;
    let content;
    let sorter;

    if (searchLoading) content = <NewsLoader />;

    if (!searchLoading && searchResults.length > 0) {
      content = this.renderArticle(searchResults);
      sorter = this.renderSortable(sortOptions);
    }

    if (!searchLoading && !searchResults.length > 0) {
      content = <Text>No Data</Text>;
      sorter = null;
    }

    return (
      <Container>
        <SearchBox
          value={query}
          onChangeText={this.handleTextChange}
          onPress={this.handlePressSearch}
        />
        {sorter}
        {content}
      </Container>
    );
  }
}

const mapStateToProps = ({ articleSearch }) => ({
  searchResults: articleSearch.searchResults,
  searchLoading: articleSearch.isLoading
});

const mapDispatchToProps = {
  searchArticles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchScreen);

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${Colors.silver};
`;

const Wrapper = styled.View`
  flex-direction: row;
  height: 20px;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  margin: 0 20px;
  background-color: ${Colors.darkGray};
  border-radius: 14px;
`;

const SortOptions = styled.Text`
  font-size: 18px;
  color: white;
`;

const Content = styled.View`
  /* align-items: center; */
  /* justify-content: center; */
`;

const Text = styled.Text`
  align-self: center;
`;
