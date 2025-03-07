import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from  "../screens/HomeScreen";
import ProductsScreen from  "../screens/ProductsScreen";
import {SCREENS} from "../utils/router";

const Stack = createNativeStackNavigator();


//* obje dağıtma
const {HOMESCREEN, PRODUCTSCREEN} = SCREENS;


const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={HOMESCREEN} component={HomeScreen} />
      <Stack.Screen name={PRODUCTSCREEN} component={ProductsScreen} />
    </Stack.Navigator>
  )
}

export default RootNavigation