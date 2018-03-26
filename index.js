// Importar una libreria para ayudar a crear un componente
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//Crear un componente
// Nesting components
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);


// Reder ot tp the devoce 
AppRegistry.registerComponent('albums', () => App);
