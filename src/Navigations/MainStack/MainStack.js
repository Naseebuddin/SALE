import { Locations, SearchItem } from '../../Screens';
import navigationString from './../../constant/navigationString'
import TabRoutes from './../TabRoutes'
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.TABROUTES} component={TabRoutes} />
      <Stack.Screen name={navigationString.LOCATIONS} component={Locations}/>
      <Stack.Screen name={navigationString.SEARCHITEM} component={SearchItem}/>
    </>
  );
}
