import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import { ShakingView } from "../Screens/Animations/Shaking/ShakingView";
import SkiaExample from "../Screens/SkiaExample/SkiaExample";

export type MainScreensParams = {
    Home: undefined;
    ShakingView: undefined;
    Carousel: undefined;
    SkiaExample: undefined;
};
  
  export type AppScreensParams = MainScreensParams 

  
const AppStack = createNativeStackNavigator<AppScreensParams>();

export default function RootStack() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="ShakingView" component={ShakingView} />
      <AppStack.Screen name="SkiaExample" component={SkiaExample} />
    </AppStack.Navigator>
  );
}