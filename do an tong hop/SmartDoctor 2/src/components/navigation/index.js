import * as React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
//splash
import StartUpScreen from "../../contants/StartUpScreen";
import Intro from "../../contants/Intro";
import HomeDangNhap from "../../contants/HomeDangNhap";
import DangKy from "../../contants/Auth/DangKy";
import DangNhap from "../../contants/Auth/DangNhap";
import HomeApp from "../../contants/Auth/HomeApp";
//câu hỏi 
import DanhSachCauHoi from "../../contants/DatCauHoiBacSi/DanhSachCauHoi";
import ChiTietCauHoi from "../../contants/DatCauHoiBacSi/ChiTietCauHoi";
import DatCauHoi from "../../contants/DatCauHoiBacSi/DatCauHoi";
import ThongBaoThanhCong from "../../contants/DatCauHoiBacSi/ThongBaoThanhCong";
import LichSuCauHoi from "../../contants/DatCauHoiBacSi/LichSuCauHoi";
//danh sách bác sĩ 
import DanhsachBacSi from "../../contants/BacSi/DanhSachBacSi";
import ChietTietBacSi from "../../contants/BacSi/ChietTierBacSi";
//firebase 
import Chat from "../../contants/BacSi/Chat";
//tin tức 
import DanhSachTinTuc from "../../contants/TinTuc/DanhSachTinTuc";
import ChiTietTinTuc from "../../contants/TinTuc/ChiTietTinTuc";
import HomeThongBao from "../../contants/ThongBao/Home";
import Messages from '../../contants/BacSi/Chat';
import ThongBaoTuVanHoiDap from '../../contants/ThongBao/ThongBaoTuVanHoiDap';
//Datlichxn 
import Chonchucnang from '../../contants/DatLichXetNghiem/Chonchucnang';
import ChonBenhVienXN from '../../contants/DatLichXetNghiem/Datlichxetnghiem/ChonBenhVienXN';
import ChonXetNghiemBV from '../../contants/DatLichXetNghiem/Datlichxetnghiem/ChonXetNghiemBV';
import Lichsuxetnghiem from '../../contants/Datlichxn/Lichsuxetnghiem';
import Chitietxetnghiem from '../../contants/DatLichXetNghiem/Datlichxetnghiem/ChiTietXetNghiem';
import ChonlichScreen from '../../contants/Datlichxn/Chonlichtheobacsi';
import ChonThoiGianXn from '../../contants/DatLichXetNghiem/Datlichxetnghiem/ChonThoiGianXn';
import XacNhanThongTin from '../../contants/DatLichXetNghiem/Datlichxetnghiem/XacNhanThongTin';
import ThongTinCaNhan from "../../contants/Auth/HoSo";
//OTP xét nghiệm 
import XacNhanOtp from '../../contants/DatLichXetNghiem/Datlichxetnghiem/XacNhanOtp'
import NhapMaOtp from '../../contants/DatLichXetNghiem/Datlichxetnghiem/NhapMaOtp'
import XacNhanHoanThanh from '../../contants/DatLichXetNghiem/Datlichxetnghiem/XacNhanHoanThanh'
//bệnh viện 
import ChonBenhVienBacSi from '../../contants/DatLichXetNghiem/DatLichBacSi/ChonBenhVienBacSi'
import ChonBacSiBs from '../../contants/DatLichXetNghiem/DatLichBacSi/ChonBacSiBs'
import ChiTietBacSiBS from '../../contants/DatLichXetNghiem/DatLichBacSi/ChiTietBacSiBS'
import ChonThoiGianBs from '../../contants/DatLichXetNghiem/DatLichBacSi/ChonThoiGianBs';
import ThongTinLich from '../../contants/DatLichXetNghiem/DatLichBacSi/ThongTinLich'
import NhapOtpBs from '../../contants/DatLichXetNghiem/DatLichBacSi/NhapOtpBs'
import XacNhanThongTinBs from '../../contants/DatLichXetNghiem/DatLichBacSi/XacNhanThongTinBs'
import XacNhanHoanThanhBs from '../../contants/DatLichXetNghiem/DatLichBacSi/XacNhanHoanThanhBs'
//thông báo 
import ChiTietThongBaoTuVanHoiDap from '../../contants/ThongBao/ChiTietThongBaoTuVanHoiDap'
import ChiTietDonxetnghiem from '../../contants/ThongBao/ChiTietDonxetnghiem'
import Donxetnghiem from '../../contants/ThongBao/Donxetnghiem'
import DanhSachLichHenBs from '../../contants/ThongBao/DanhSachLichHenBs'
import ChitTietDanhSachLichHenBs from '../../contants/ThongBao/ChitTietDanhSachLichHenBs'
const TabNavigator = createBottomTabNavigator(
  {
    HomeApp: {
      screen: HomeApp,
      navigationOptions: {
        tabBarLabel: "Trang Chủ",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../../assets/icon/ic_homeEnable.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/icon/ic_homeDisable.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
    CongDong: {
      screen: DanhSachCauHoi,
      navigationOptions: {
        tabBarLabel: "Cộng Đồng",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../../assets/icon/ic_congdong_ds.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/icon/ic_congdong_en.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
      ThongBao: {
      screen: HomeThongBao,
      navigationOptions: {
        tabBarLabel: "Thông Báo",
        tabBarIcon: ({ focused }) => (
          <>
            {focused ? (
              <Image
                source={require("../../assets/icon/ic_notiEnable.png")}
                style={{ width: 20, height: 20 }}
              />
            ) : (
              <Image
                source={require("../../assets/icon/ic_notiDisable.png")}
                style={{ width: 20, height: 20 }}
              />
            )}
          </>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#4390DF",
      inactiveTintColor: "#707070",
      style: {
        paddingTop: 11,
        paddingBottom: 10,
        height: 63,
      },
    },
  }
);
const TAB = createAppContainer(TabNavigator);
const RootStack = createStackNavigator(
  {
    Init: {
      screen: StartUpScreen,
      navigationOptions:{
        headerShown: false
      }
    },
    Intro: {
      screen: Intro,
      navigationOptions:{
        header: null,    
      }
    },
    HomeDangNhap: {
      screen: HomeDangNhap,
      navigationOptions:{
        header: null,    
      }
    },
    DangKy: {
      screen: DangKy,
      navigationOptions:{
        headerBackTitle: 'Back'  
      }
    },
    DangNhap: {
      screen: DangNhap,
      navigationOptions:{
        header: null,    
      }
    },
    HomeApp: {
      screen: TAB,
      navigationOptions:{
        header: null,    
      }
    },
    DanhSachCauHoi: {
      screen: DanhSachCauHoi,
      navigationOptions:{
        headerBackTitle: 'Back'  
      }
    },
    ChiTietCauHoi: {
      screen: ChiTietCauHoi,
      navigationOptions:{
        header: null,    
      }
    },
    DatCauHoi: {
      screen: DatCauHoi,
      navigationOptions:{
        headerBackTitle: 'Back'   
      }
    },
    ThongBaoTuVanHoiDap:{
      screen:ThongBaoTuVanHoiDap,
      navigationOptions:{
        headerBackTitle: 'Back'  
      }
    },
    ThongBaoThanhCong:{
      screen:ThongBaoThanhCong,
      navigationOptions:{
        header: null,    
      }
    },
    DanhsachBacSi:{
      screen:DanhsachBacSi,
      navigationOptions:{
        headerBackTitle: 'Back'     
      }
    },
    ChietTietBacSi:{
      screen:ChietTietBacSi,
      navigationOptions:{
        headerBackTitle: 'Back'    
      }
    },
    Messages:{
      screen:Messages,
      navigationOptions:{
        title:"Thông tin lịch hẹn Bác sĩ"  
      }
    },
    DanhSachTinTuc:{
      screen: DanhSachTinTuc,
      navigationOptions:{
        headerBackTitle: 'Back'  
      }
    },
    ChiTietTinTuc:{
      screen: ChiTietTinTuc,
      navigationOptions:{
        headerBackTitle: 'Back'  
      }
    },
    LichSuCauHoi:{
      screen: LichSuCauHoi,
      navigationOptions:{
        header: null,    
      }
    },
    Chat:{
      screen: Chat,
      navigationOptions:{
        header: null,    
      }
    },
    ChonchucnangScreen:{
      screen: Chonchucnang,
      navigationOptions:{
        headerBackTitle: 'Back'  
      }
    },
    LichsxetnghiemScreen:{
      screen: Lichsuxetnghiem,
      navigationOptions:{
        header: null,    
      }
    },
    ChonBenhVienXN:{
      screen:ChonBenhVienXN,
      navigationOptions:{
        header: null,    
      }
    },
    ChonXetNghiemBV:{
      screen:ChonXetNghiemBV,
      navigationOptions:{
        header: null,    
      }
    },
    Chitietxetnghiem:{
      screen:Chitietxetnghiem,
      navigationOptions:{
        header: null,    
      }
    },
    ChonlichScreen:{
      screen:ChonlichScreen,
      navigationOptions:{
        header: null,    
      }
    },
    ChonThoiGianXn:{
      screen:ChonThoiGianXn,
      navigationOptions:{
        header: null,    
      }
    },
    XacNhanThongTin:{
      screen:XacNhanThongTin,
      navigationOptions:{
        header: null,    
      }
    },
    ThongTinCaNhan:{
      screen:ThongTinCaNhan,
      navigationOptions:{
        headerBackTitle: 'Back'  
      }
    },
    XacNhanOtp:{
      screen:XacNhanOtp,
      navigationOptions:{
        header: null,    
      }
    },
    NhapMaOtp:{
      screen:NhapMaOtp,
      navigationOptions:{
        header: null,    
      }
    },
    XacNhanHoanThanh:{
      screen:XacNhanHoanThanh,
      navigationOptions:{
        header: null,    
      }
    },
    ChonBenhVienBacSi:{
      screen:ChonBenhVienBacSi,
      navigationOptions:{
        title:"Chọn bệnh viện"
      }
    },
    ChonBacSiBs:{
      screen:ChonBacSiBs,
      navigationOptions:{
        title:"Chọn bác sĩ"
      }
    },
    ChiTietBacSiBS:{
      screen:ChiTietBacSiBS,
      navigationOptions:{
        title:"Thông tin bác sĩ"
      }
    },
    ChonThoiGianBs:{
      screen:ChonThoiGianBs,
      navigationOptions:{
        title:"Chọn ngày"
      }
    },
    ThongTinLich:{
      screen:ThongTinLich,
      navigationOptions:{
        title:"Chọn lịch khám"
      }
    },
    NhapOtpBs:{
      screen:NhapOtpBs,
      navigationOptions:{
        title:"Xác thực Otp"
      }
    },
    XacNhanThongTinBs:{
      screen:XacNhanThongTinBs,
      navigationOptions:{
        title:"Xác nhận thông tin"
      }
    },
    XacNhanHoanThanhBs:{
      screen:XacNhanHoanThanhBs,
      navigationOptions:{
        header: null,    
      }
    },
    ChiTietThongBaoTuVanHoiDap:{
      screen:ChiTietThongBaoTuVanHoiDap,
      navigationOptions:{
        title:"Bác sĩ trả lời"
      }
    },
    Donxetnghiem:{
      screen:Donxetnghiem,
      navigationOptions:{
        title:"Đơn xét nghiệm",
        headerBackTitle: 'Back' 
      }
    },
    ChiTietDonxetnghiem:{
      screen:ChiTietDonxetnghiem,
      navigationOptions:{
        title:"Chi tiết xét nghiệm",
        headerBackTitle: 'Back' 
      }
    },
    DanhSachLichHenBs:{
      screen:DanhSachLichHenBs,
      navigationOptions:{
        title:"Danh sách lịch hẹn bác sĩ",
        headerBackTitle: 'Back'   
      }
    },
    ChitTietDanhSachLichHenBs:{
      screen:ChitTietDanhSachLichHenBs,
      navigationOptions:{
        title:"Thông tin lịch hẹn Bác sĩ",
        headerBackTitle: 'Back'   
      }
    }

  },
  {
    mode: "modal",
  }
);

export default createAppContainer(RootStack);
