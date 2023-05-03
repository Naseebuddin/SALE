
import { CreateLoginEmail, Login, LoginThroughEmail, LoginthroughPhoneNo, MainScreen, Otpscreen } from "../../Screens";
import navigationString from "./../../constant/navigationString";
export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationString.MAINSCREEN} component={MainScreen} />
      <Stack.Screen name={navigationString.LOGIN} component={Login} />
      <Stack.Screen name={navigationString.CREATELOGINEMAIL} component={CreateLoginEmail}/>
      <Stack.Screen name={navigationString.LOGINTHROUGHEMAIL} component={LoginThroughEmail} />
      <Stack.Screen name={navigationString.LOGINTHROUGPHONENO} component={LoginthroughPhoneNo} />
      <Stack.Screen name={navigationString.OTPSCREEN} component={Otpscreen} />
    </>
  );
}
