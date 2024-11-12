import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black', // Fundo preto para toda a tela
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white', // Fundo branco para o campo de texto
    borderColor: '#ccc',
    borderWidth: 1, // Borda ao redor do input
    borderRadius: 5,
    marginBottom: 20,
    color: 'black', // Cor do texto na caixa de texto
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF007F', // Cor rosa vibrante para os botões (referência ao Gambit)
    color: 'white', // Texto branco nos botões
    width: '80%', // Largura do botão
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    width: '100%',
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  selectedTask: {
    backgroundColor: '#d3e5ff', // Cor para o item selecionado
  },
});

export default styles;




