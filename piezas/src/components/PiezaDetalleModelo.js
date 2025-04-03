import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

const PiezaDetalleModelo = ({ piece, onClose }) => {
  if (!piece) return null;

  return (
    <Modal visible={!!piece} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Detalle de la pieza</Text>
          <View style={styles.content}>
            <Text style={styles.text}>Tipo: {piece.type}</Text>
            <Text style={styles.text}>Marca: {piece.brand}</Text>
            <Text style={styles.text}>No. Serie: {piece.serialNumber}</Text>
            <Text style={styles.text}>Fecha de cambio: {piece.date}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Cerrar" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%", 
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    justifyContent: "space-between",
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  content: {
    flexGrow: 1,
  },
  text: {
    marginBottom: 10,
  },
  buttonContainer: {
    alignSelf: "center",
  },
});

export default PiezaDetalleModelo;
