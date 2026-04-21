import { Image, StyleSheet, Text, View } from "react-native";

const ProductCard = (props) =>{
    const {produtos} = props 

    return(
        <View>
            <Image source={{url: produtos.img_produto}}/>
            <Text>{produtos.titulo}</Text>
            <Text>{produtos.descricao}</Text>
            <Text>{produtos.valor}</Text>
        </View>
    )
}

export default ProductCard;