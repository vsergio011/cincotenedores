import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    content :{
        marginHorizontal:10
    },
    textArea:{
      height:100,
      width: '100%', 
      padding:0,
      margin:0 
    },

    mapStyle:{
      width:"100%",
      height:550
    },

    mapActions:{
      flexDirection:"row",
      justifyContent: "center",
      marginTop: 10,
    },

    btnMapContainerSave:{
      paddingRight:5,
      width: "50%"

    },

    btnMapSave:{
      backgroundColor:"#00a680"
    },

    btnMapContainerCancel:{
      paddingLeft:5,
      width: "50%"

    },

    btnMapCancel:{
      backgroundColor:"#a60d0d"
    }
    
});
