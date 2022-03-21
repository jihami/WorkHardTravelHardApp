import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native';
import { theme } from './colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.header}>
        <TouchableOpacity > 
          {/* 터치하면 투명해짐, activeOpacity={0} 얘로 조절 ㄱㄴ */}
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        {/* 터치ㅏ면 배경색 깜빡, activeOpacity={0.5}얘로 조절 0이랑 가까워지면 안보임 */}
        {/* <TouchableHighlight 
          underlayColor="red"
          activeOpacity={0.5}
          onPress={() => console.log("pressed")}>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight> */}
        {/* 작동은 되는데 ui에서는 티를 안냄 -> 콘솔에 로그는 찍힘 */}
        {/* <TouchableWithoutFeedback
          underlayColor="red"
          activeOpacity={0.5}
          onPress={() => console.log("pressed")}>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableWithoutFeedback> */}
        {/* 아무것도 안나타남, 여어가지 설정많음!!, new!! */}
        {/* <Pressable>
          <Text style={styles.btnText}>Travel</Text>
        </Pressable> */}
        <TouchableOpacity>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop:100,
  },
  btnText:{
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
});
