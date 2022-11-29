import { View, Text } from "react-native";
import React, { useState } from "react";
import { ListItem, Icon } from "@rneui/base";
import { map } from "lodash";
import { Modal } from "../../components/Shared";

export function AccountOptions() {
  const [showModal, setShowModal] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null)
  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);
  const selectedComponent = (key) => {
    if (key === "displayName") {
        setRenderComponent(<Text>Cambiar nombre </Text>)
    }
    if (key === "displayEmail") {
        setRenderComponent(<Text>Cambiar Email </Text>)
    }

    if (key === "displayPassword") {
        setRenderComponent(<Text>Cambiar password </Text>)
    }
    onCloseOpenModal();
  };
  const menuOptions = getMenuOptions(selectedComponent);

  return (
    <View>
      {menuOptions.map((menu, index) => {
        return (
          <ListItem key={index} bottomDivider onPress={menu.onPress}>
            <Icon
              type={menu.iconType}
              name={menu.iconNameLeft}
              color={menu.iconColorLeft}
            />
            <ListItem.Content>
              <ListItem.Title>{menu.title}</ListItem.Title>
            </ListItem.Content>
            <Icon
              type={menu.iconType}
              name={menu.iconNameRight}
              color={menu.iconColorRight}
            />
          </ListItem>
        );
      })}
      <Modal show={showModal} close={onCloseOpenModal}>
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
  return [
    {
      title: "Cambiar Nombre y Apellidos",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayEmail"),
    },
    {
      title: "Cambiar contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayPassword"),
    },
  ];
}
