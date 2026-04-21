import { View, Text, StyleSheet, Button } from 'react-native';

const dados = [
  { id: 1, nome: 'João Pedro', matricula: '2024108102540001' },
  { id: 2, nome: 'Heitor', matricula: '2024108102540009' }
];

const AboutScreen=()=>{
    return(
        <View>
            <Text>Autores do código:</Text>
            {dados.map(((dado)=>
            <View>
            <Text>Nome: {dado.nome}</Text>
            <Text>Matrícula: {dado.matricula}</Text>
            <Text>Nome: {dado.nome}</Text>
            <Text>Matrícula: {dado.matricula}</Text>
            </View>
            ))}
        </View>
    )
}

export default AboutScreen