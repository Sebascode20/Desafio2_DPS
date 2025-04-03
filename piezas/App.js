import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PieceItem from './src/components/Pieza';
import PieceDetailsModal from './src/components/PiezaDetalleModelo';
import AddPieceForm from './src/components/Formulario';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [pieces, setPieces] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);

  const deletePiece = (id) => {
    setPieces(pieces.filter(piece => piece.id !== id));
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Button title="Agregar Pieza" onPress={() => navigation.navigate('Agregar Pieza', { setPieces })} />
      {pieces.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 40 }}>No hay piezas, Agregue una</Text>
      ) : (
        <FlatList
          data={pieces}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PieceItem piece={item} onDelete={deletePiece} onSelect={setSelectedPiece} />
          )}
        />
      )}
      <PieceDetailsModal piece={selectedPiece} onClose={() => setSelectedPiece(null)} />
    </SafeAreaView>
  );
}

function AddPieceScreen({ route, navigation }) {
  const { setPieces } = route.params;

  const addPiece = (newPiece) => {
    setPieces((prevPieces) => [...prevPieces, { id: Date.now().toString(), ...newPiece }]);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <AddPieceForm onAdd={addPiece}  onCancel={() => navigation.goBack()}/>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Piezas" component={HomeScreen}  options={{ headerTitleAlign: 'center' }}/>
        <Stack.Screen name="Agregar Pieza" component={AddPieceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}