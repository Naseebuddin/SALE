import { Buycar, Details, Locations, SearchItem, Sellcar, Setting } from '../../Screens';
import TabRoutes from '../TabRoutes';
import navigationString from './../../constant/navigationString'
export default function MainStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.TABROUTES} component={TabRoutes} />
      <Stack.Screen name={navigationString.LOCATIONS} component={Locations}/>
      <Stack.Screen name={navigationString.SEARCHITEM} component={SearchItem}/>
      <Stack.Screen name= {navigationString.SETTING} component={Setting}/>
      <Stack.Screen name={navigationString.SELLCAR} component={Sellcar}/>
      <Stack.Screen name={navigationString.DETAILS} component={Details}/>
    </>
  );
}
