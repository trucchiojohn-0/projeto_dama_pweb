import { StyleSheet } from 'react-native';

export const stylesGlobal = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },

  button: {
    width: 200,
    height: 50,
    color: '#000000',
    fontSize: 20,
    backgroundColor: '#217aad',
    borderRadius: 2,
    marginBottom: 10,
    textAlign: 'center',
  }
});