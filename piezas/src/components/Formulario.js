import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Formulario = ({ onAdd, onCancel }) => {
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    if (type && brand && serialNumber && price && date) {
      onAdd({ type, brand, serialNumber, price, date });
      setType(''); setBrand(''); setSerialNumber(''); setPrice(''); setDate('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Tipo de pieza" value={type} onChangeText={setType} style={styles.input} />
      <TextInput placeholder="Marca" value={brand} onChangeText={setBrand} style={styles.input} />
      <TextInput placeholder="Número de Serie" value={serialNumber} onChangeText={setSerialNumber} style={styles.input} />
      <TextInput placeholder="Precio" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Fecha" value={date} onChangeText={setDate} style={styles.input} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Guardar" onPress={handleSubmit} />
        </View>
        <View style={styles.button}>
          <Button title="Cancelar" onPress={onCancel} color="red" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 5,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10,
  },
  button: {
    flex: 1, 
    marginHorizontal: 5, 
  },
});

export default Formulario;