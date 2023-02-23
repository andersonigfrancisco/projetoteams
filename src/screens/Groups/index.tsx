import {Text, StyleSheet, View} from 'react-native'


export function Groups(){

  return(
   <View style={styles.container}>
     <Text>
       Ola, Mundo!
     </Text>
   </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignContent:"center",
    textAlign:"center"
  }

})