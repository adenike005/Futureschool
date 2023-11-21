import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Color from "../Constraint/Color";
import Images from "../Constraint/Images";
import { SIZES, FONTS } from "../Constraint/Themes";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Sign = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Color.secondary }}>
      <View style={{ width: "100%", height: "40%" }}>
        <ImageBackground
          source={Images.background}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <View style={{ marginHorizontal: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h1, color: Color.primary }}>
          Welcome Back
        </Text>
        <View style={{ marginTop: SIZES.padding * 4 }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Color.dark,
              display: "flex",
              flexDirection: "row",
            }}
          >
           <TouchableOpacity>
           <Icon
              name="email"
              size={25}
              color={Color.grey}
              style={{ marginRight: 5 }}
            />
           </TouchableOpacity>
            <TextInput
              placeholder="Email"
              style={{
                color: Color.primary,
                ...FONTS.body3,
              }}
              placeholderTextColor={Color.light}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Color.dark,
              display: "flex",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
           <TouchableOpacity>
           <MaterialIcons
              name="lock"
              size={25}
              color={Color.grey}
              style={{ marginRight: 5 }}
            />
           </TouchableOpacity>
            <TextInput
              placeholder="Password"
              style={{
                color: Color.primary,
                ...FONTS.body3,
              }}
              placeholderTextColor={Color.light}
            />
          </View>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <Image
              source={Images.arrow}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between",}}>
            <View style={{width:"45%", padding:SIZES.padding     ,borderWidth: 1, borderColor:Color.grey ,display:"flex", flexDirection:"row", justifyContent:"space-between", borderRadius: 15, alignItems:"center"}}>
              <Text style={{color:Color.purple}}>facebook</Text>
             <TouchableOpacity>
             <Image source={Images.facebook} style={{width: 30, height: 30}} resizeMode="contain"/>
             </TouchableOpacity>
            </View>
            <View style={{width:"45%",  padding:SIZES.padding  , borderWidth: 1, borderColor:Color.grey, display:"flex", flexDirection:"row", justifyContent:"space-between", borderRadius: 15, alignItems:"center"}}>
              <Text style={{color:Color.purple}}>Google</Text>
              <TouchableOpacity>
              <Image source={Images.gooogle} style={{width: 30, height: 30}} resizeMode="contain"/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({});
