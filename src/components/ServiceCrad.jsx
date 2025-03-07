import { StyleSheet, Text, View , Image} from 'react-native'


const ServiceCrad = ({item}) => {
  return (
    <View style={styles.container}  >
      <Text style={styles.recentSearch} > {item.title}  </Text>
      <Image source={item.image} style={styles.serviceImg}  />
    </View>
  )
}

export default ServiceCrad

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#fff",
        width : 140,
        padding : 5,
        marginLeft: 8,
        borderRadius: 8,
    },
    recentSearch : {
        fontSize: 13,
        marginBottom: 8,
        color: "#000000",
    } ,
    serviceImg : {
        width : "100%",
        height: 130,
    } , 
})