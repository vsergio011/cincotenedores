import { View, Text } from "react-native";
import React,{useState} from "react";
import { Button } from "@rneui/base";
import { styles } from "./UserLoggedScreen.styles";
import { InfoUser,AccountOptions } from "../../../components/Account";
import {LoadingModal} from "../../../components"
import {getAuth,signOut} from "firebase/auth"
export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("")
  const [ _ , setReload] = useState(false)
  const onReload = () => setReload((prevState) => !prevState)
  const logout = async() => {
    const auth = getAuth();
    await signOut(auth)
  }
  return (
    <View style={styles.content}>
      <InfoUser  setLoading={setLoading} setLoadingText={setLoadingText}/>
      <AccountOptions onReload={onReload}/>
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyles}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />
      <LoadingModal show={loading} text={loadingText}/>
    </View>
  );
}
