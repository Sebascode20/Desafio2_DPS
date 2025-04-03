import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const Pieza = ({ piece, onDelete, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(piece)}>
      <View style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text style={{marginBlock: 10}}>Pieza: {piece.type}</Text>
        <Text style={{marginBottom: 20}}>Fecha de cambio: {piece.date}</Text>
        <Button title="Eliminar" onPress={() => onDelete(piece.id)} />
      </View>
    </TouchableOpacity>
  );
};

export default Pieza;
