import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  imageDisplay: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  },
  cent: {
    alignItems: 'center',
  },
  textTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#0a4a4b',
    padding: 20,
  },
  searchBox: {
    padding: 30,
    alignItems: 'center',
  },
  inputWrapper: {
    display: 'flex',
    width: "80%",
    alignItems: 'center',
    padding: 10,
    marginBottom: 7
  },

  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  inputError: {
    borderColor: "red"
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start'
  },
  loginBox: {
    padding: 30,
    alignItems: 'center',
  },
  openPageBox: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  topBox: {
    padding: 30,
    height: '40%',
    alignItems: 'center'
  },
  botBox: {
    padding: 30,
    justifyContent: 'center'
  },
  navButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginBottom: 2,
    marginHorizontal: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonFont: {
    color: 'white',
  },
  item: {
    marginTop: 24,
    marginLeft: 20,
    marginRight: 20,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    borderRadius: 15,
  },
  textInputStyle: {
    fontSize: 30,
    marginEnd: 10,
  },
  textStyle: {
    fontSize: 20,
    marginEnd: 10,
  },
  lists: {
    flex: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '100%',
    textAlign: 'center',
  },
  plusBox: {
    flex: 1,
    padding: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
