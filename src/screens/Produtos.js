import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from '../style/ProductStyle';

export default function Feed() {

    return (
        <ScrollView >
            <View style={styles.container}>
                <SearchBar
                    placeholder="Pesquisar produto..."
                    containerStyle={{backgroundColor: '#b22222'}}
                    inputContainerStyle={{backgroundColor: '#b22222'}}
                    searchIcon={{color: '#fff'}}
                    inputStyle={{backgroundColor: 'white', height: 5, borderRadius: 5}}
                    marginTop={10}
                />
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/Fogao+.jpeg')} />
                    <Text style={styles.title}>Fogão 4 Bocas Consul Inox com Mesa de Vidro</Text>
                    <Text style={styles.preco}>De: R$ 1200.00</Text>
                    <Text style={styles.oferta}>Por: R$ 1129.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/GeladeiraBrastemp+++.jpeg')} />
                    <Text style={styles.title}>Geladeira Frost Free Brastemp Side Inverse 540 litros</Text>
                    <Text style={styles.preco}>De: R$ 6389.00</Text>
                    <Text style={styles.oferta}>Por: R$ 5019.00</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/Microondas+++.jpeg')} />
                    <Text style={styles.title}>Micro-ondas Consul 32 Litros Inox 220V</Text>
                    <Text style={styles.preco}>De: R$ 580.00</Text>
                    <Text style={styles.oferta}>Por: R$ 409.99</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
                <View style={styles.card}>
                    <Image style={styles.image} source={require('../images/Lavaroupa++.jpeg')} />
                    <Text style={styles.title}>Lavadora de Roupas Philco inverter 12KG</Text>
                    <Text style={styles.preco}>De: R$ 2399.00</Text>
                    <Text style={styles.oferta}>Por: R$ 2179.99</Text>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons
                            name='cart'
                            size={22}
                            color='#000'
                            padding={5}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
