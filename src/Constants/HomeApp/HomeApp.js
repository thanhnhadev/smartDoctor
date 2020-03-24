import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity,
  WebView
} from 'react-native'
import * as theme from '../../Common/Theme';
import CommonStyles, {
  deviceHeight,
  NAV_HEIGHT,
  TAB_HEIGHT,
} from '../Styles/HomeApp/CommonStyles';
const { width, height } = Dimensions.get('window');
export default class HomeApp extends React.Component {
  state = {
    DataDefault: [
      {
        id: '1',
        hinhanh: '../../../assets/Data/tintuc.jpg',
        tentintuc: 'Người đi khám và điều trị Covid-19 được BHYT chi trả như thế nào?',
        Noidung: 'Bộ Y tế vừa ban hành quyết định bổ sung bệnh viêm đường hô hấp cấp do chủng mới của virus'

      }
    ]
  }

  async componentDidMount() {
    const DataDefault = await ajax.fetchUsers();
    this.setState({ DataDefault });
  }

  render() {

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
        <View style={[styles.flex, styles.row, styles.header,]}>
          <View>
            <Text style={{ color: theme.colors.caption }}>Xin chào</Text>
            <Text style={{ fontSize: theme.sizes.font * 2 }}>Nguyễn Trương Thanh Nhã
        </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('HoSoScreen')}>
              <Image style={styles.avatar} source={require('../../../assets/Data/Demo.jpg')}
              />
            </TouchableOpacity>

          </View>
        </View>
        <View style={[styles.flex, styles.column, styles.recommended]}>
          <View
            style={[
              styles.row,
              styles.recommendedHeader
            ]}
          >
            <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Bạn cần hỗ trợ gì?</Text>
            <TouchableOpacity activeOpacity={0.5}>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.fullField}>

          <View style={styles.colMainLeft}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomScreen')}>

              <View
                colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                style={styles.boxMain}>
                <View
                  backgroundColor='#2283c5'
                  style={styles.highLightBoxMain}>
                  <FontAwesome
                    style={styles.iconchucnang}
                    name={'comments'} />
                  <Text style={styles.textchucnang}>Chat</Text>

                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ChonchucnangScreen')}>
              <View
                colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                style={styles.boxMain}>
                <View
                  backgroundColor='#fab540'
                  style={styles.highLightBoxMain}>
                  <FontAwesome
                    style={styles.iconchucnang}
                    name={'medkit'} />
                  <Text style={styles.textchucnang}> Đặt lịch</Text>
                </View>
              </View>
            </TouchableOpacity>

          </View>

          <View style={styles.colMainRight}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DanhsachBacSi')}>
              <View
                colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                style={styles.boxMain}>
                <View
                  backgroundColor='#50cddf'
                  style={styles.highLightBoxMain}>
                  <FontAwesome
                    style={styles.iconchucnang}
                    name={'search'} />
                  <Text style={styles.textchucnang}> Tìm bác sĩ</Text>
                </View>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => this.props.navigation.navigate('DanhsachcauhoiScreen')}>

              <View
                colors={['rgb(150,150,150)', 'rgb(105,105,105)']}
                style={styles.boxMain}>
                <View
                  backgroundColor='#f17867'
                  style={styles.highLightBoxMain}>
                  <FontAwesome
                    style={styles.iconchucnang}
                    name={'user'} />
                  <Text style={styles.textchucnang}>Đặt câu hỏi</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ alignSelf: 'center', fontSize: 20, marginBottom: 10 }}>Tin Tức</Text>

        <View style={[styles.tintuc]}>

          <FlatList
            keyExtractor={item => item.Id}
            style={styles.container}
            data={this.state.DataDefault}
            onEndReachedThreshold="-0.2"
            renderItem={({ item }) =>
              <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}
                onPress={() => navigate('DetailsBlogScreen')}>

                <View activeOpacity={0.9}>
                  <ImageBackground
                    style={[styles.flex, styles.destination, styles.shadow]}
                    imageStyle={{ borderRadius: theme.sizes.radius }}
                    source={require('../../../assets/Data/tintuc.jpg')}
                  >
                  </ImageBackground>
                  <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
                    <Text numberOfLines={1} style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: 8, }}>
                      {item.tentintuc}
                    </Text>
                    <View style={[styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
                      <View numberOfLines={2} style={{ color: theme.colors.caption }}>
                        <Text>{item.Noidung}</Text>

                      </View>
                      <FontAwesome
                        name="chevron-right"
                        size={theme.sizes.font * 0.75}
                        color={theme.colors.caption}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            } />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BlogScreen')}>
            <View style={styles.xemtatcacontainer}>

              <Text style={styles.xemtatca}> Xem tất cả</Text>
            </View>
          </TouchableOpacity>

        </View>

      </ScrollView>

    );
  }
}
const ELEMENT_HEIGHT = 430;
const spaceHeight = deviceHeight - NAV_HEIGHT - TAB_HEIGHT - ELEMENT_HEIGHT;
const styles = StyleSheet.create({
  flex: {
    flex: 0,

  },
  column: {
    flexDirection: 'column'
  },
  tintuc: {
    flexDirection: 'column',
    marginBottom: 40
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
  },
  destinations: {
    flex: 1,
    width: 90,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - (theme.sizes.padding * 2),
    height: width * 0.5,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - (theme.sizes.padding * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding * 4),
  },
  recommended: {
  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.padding,
  },
  recommendedList: {
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    height: (width - (theme.sizes.padding * 2)) / 2,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: 'bold'
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
  },
  fullField: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: spaceHeight * 0.2 - 15,
    marginBottom: spaceHeight * 0.55 - 15,
  },
  colMainLeft: {
    flex: 1,
    marginRight: 8,
  },
  highLightBoxMain: {
    color:'#2283c5',
    height: 135,
    borderWidth: 0,
    borderRadius: 9,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  boxMain: {
    height: 135,
    borderWidth: 0,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
    elevation: 12,
  },
  colMainRight: {
    flex: 1,
    marginLeft: 8,
  },
  iconchucnang: {
    marginTop: 10,
    fontSize: 50,
    alignSelf: 'center',
    color: '#fff'
  },
  textchucnang: {
    marginTop: 12,
    color: '#ffff',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  xemtatcacontainer: {
    marginTop: 30,
    alignSelf: 'center',
    width: 250,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
    color: '#51cde0'
  },
  xemtatca: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 20
  }
});