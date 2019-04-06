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
import { toggleMenu, getUser } from '../stores/actions';

// Components
import Icon from '../components/common/icon';
// import Card from '../components/common/card';
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

  render() {
    const { user } = this.props;

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
                {sections.map((section, index) => (
                  <Section key={index} text={section.text} />
                ))}
              </ScrollView>

              <SubTitle>Continue Learning</SubTitle>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
              >
                {/* {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate('Section', { section: card })
                    }
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      logo={card.logo}
                      caption={card.caption}
                      subTitle={card.subTitle}
                    />
                  </TouchableOpacity>
                ))} */}
              </ScrollView>

              <SubTitle>Populer Course</SubTitle>

              {/* {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  logo={course.logo}
                  subTitle={course.subtitle}
                  title={course.title}
                  avatar={course.avatar}
                  caption={course.caption}
                  author={course.author}
                />
              ))} */}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

const mapStateToProps = ({ menu, user }) => ({
  menu,
  user: user.user
});

const mapDispatchToProps = {
  toggleMenu,
  getUser
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

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 20px;
  padding-left: 80px;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: ${Fonts.weight.large};
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
`;

const Title = styled.Text`
  font-size: ${Fonts.size.regular};
  color: #b8bece;
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
