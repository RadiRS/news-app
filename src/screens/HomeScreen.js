import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from 'react-native';
import styled from 'styled-components';

// Actions
import {
  toggleMenu,
  getUser,
  getArticles,
  getArticlesNews
} from '../stores/actions';

// Components
import { UserMenuLoader, NewsLoader } from '../components/loader';
import FlatList from '../components/flastlist';
import Icon from '../components/common/icon';
import Populer from '../components/article/populer';
import ArticleSection from '../components/article/section';
import UserMenu from '../components/user';
// import Course from '../components/course';
import Section from '../components/section';
import Avatar from '../components/avatar';
import { Colors, Fonts } from '../themes';

class HomeScreen extends Component {
  static navigationOptions = () => ({
    header: null
  });

  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
    radius: new Animated.Value(0)
  };

  componentDidMount() {
    StatusBar.setBackgroundColor(Colors.silver, true);
    StatusBar.setBarStyle('dark-content');

    this.props.getArticles();
    this.props.getUser();
  }

  componentDidUpdate() {
    this.handleTogleMenu();
  }

  handleTogleMenu = () => {
    if (this.props.menu.openMenu) {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 200,
        easing: Easing.in()
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      Animated.spring(this.state.radius, {
        toValue: 10
      }).start();

      StatusBar.setBackgroundColor('black', true);
      StatusBar.setBarStyle('light-content');
    } else {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 200,
        easing: Easing.in()
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      Animated.spring(this.state.radius, {
        toValue: 0
      }).start();

      StatusBar.setBackgroundColor(Colors.silver, true);
      StatusBar.setBarStyle('dark-content');
    }
  };

  renderItemPopulerArticle = ({ item }) => (
    <TouchableOpacity>
      <Populer article={item} />
    </TouchableOpacity>
  );

  renderItemSectionArticle = ({ item }) => (
    <TouchableOpacity>
      <ArticleSection article={item} />
    </TouchableOpacity>
  );

  renderPopulerArticle = data => (
    <FlatList
      data={data}
      renderItem={this.renderItemPopulerArticle}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  );

  renderSectionArticle = data => (
    <FlatList
      data={data}
      renderItem={this.renderItemSectionArticle}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 10 }}
    />
  );

  render() {
    const { user, userLoading, articles, articleLoading } = this.props;

    const NewsSection = articles.filter(item => item.section === 'World');
    const OpinionSection = articles.filter(item => item.section === 'Opinion');
    const ArtsSection = articles.filter(item => item.section === 'Arts');
    const LivingSection = articles.filter(item => item.section === 'Health');

    return (
      <RootView>
        <UserMenu user={user} />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
            borderRadius: this.state.radius
          }}
        >
          <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
              {userLoading ? (
                <UserLoaderWrapper>
                  <UserMenuLoader />
                </UserLoaderWrapper>
              ) : (
                <TitleBar>
                  <TouchableOpacity
                    onPress={this.props.toggleMenu}
                    style={{
                      marginLeft: 20,
                      position: 'absolute',
                      top: 0,
                      left: 0
                    }}
                  >
                    <Avatar photo={user.photo} />
                  </TouchableOpacity>
                  <Title>Welcome back,</Title>
                  <Name>{user.name}</Name>
                  <Icon
                    name="ios-notifications"
                    style={{
                      position: 'absolute',
                      right: 20,
                      top: 5
                    }}
                  />
                </TitleBar>
              )}

              {articleLoading ? (
                <ArticleLoaderWrapper>
                  <NewsLoader />
                  <NewsLoader />
                </ArticleLoaderWrapper>
              ) : (
                <>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      flexDirection: 'row',
                      padding: 20,
                      paddingLeft: 12,
                      paddingRight: 12,
                      paddingTop: 30
                    }}
                  >
                    {sections.slice(0, 10).map((section, index) => (
                      <Section key={index} text={section.text} />
                    ))}
                  </ScrollView>

                  <SubTitle>Most Populer</SubTitle>
                  {this.renderPopulerArticle(articles)}

                  <SubTitle>News</SubTitle>
                  {this.renderSectionArticle(NewsSection)}

                  <SubTitle>Opinion</SubTitle>
                  {this.renderSectionArticle(OpinionSection)}

                  <SubTitle>Arts</SubTitle>
                  {this.renderSectionArticle(ArtsSection)}

                  <SubTitle>Living</SubTitle>
                  {this.renderSectionArticle(LivingSection)}
                </>
              )}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

const mapStateToProps = ({ menu, user, article }) => ({
  menu,
  user: user.user,
  userLoading: user.isLoading,
  articles: article.articles,
  articleLoading: article.isLoading
});

const mapDispatchToProps = {
  toggleMenu,
  getUser,
  getArticles,
  getArticlesNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const RootView = styled.View`
  flex: 1;
  background: black;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.silver};
  overflow: hidden;
`;

const UserLoaderWrapper = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  height: 10.5%;
`;

const ArticleLoaderWrapper = styled.View`
  margin-top: 20px;
  margin-left: 20px;
  height: 10.5%;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-left: 80px;
`;

const SubTitle = styled.Text`
  color: ${Colors.darkGray};
  font-weight: ${Fonts.weight.large};
  font-size: 24px;
  margin-left: 20px;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: ${Fonts.size.regular};
  color: ${Colors.darkGray};
  font-weight: ${Fonts.weight.reguler};
`;

const Name = styled.Text`
  font-family: ${Fonts.type.base};
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const sections = [
  {
    text: 'Home'
  },
  {
    text: 'Arts'
  },
  {
    text: 'Automobiles'
  },
  {
    text: 'Business'
  },
  {
    text: 'Fashion'
  },
  {
    text: 'Food'
  },
  {
    text: 'Health'
  },
  {
    text: 'Movies'
  },
  {
    text: 'National'
  },
  {
    text: 'Oponions'
  },
  {
    text: 'Politics'
  },
  {
    // image: images.logoSketch,
    text: 'Science'
  }
];
