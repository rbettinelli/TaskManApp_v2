import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: "100%"
  },
  imageDisplay: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    justifyContent: 'center'
  },
  cent: {
    alignItems: 'center',
  },
  textTitle: {
    color: '#OOBBF9',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#OOBBF9',
    padding: 20,
  },
  textHeader:{
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#9B5DE5',
    padding: 20,
  },
  searchBox: {
    padding: 30,
    alignItems: 'center',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 20
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    borderBottomColor: '#9B5DE5',
    borderBottomWidth: 1,
  },
  inputError: {
    borderColor: "red"
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start'
  },
  loginBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  openPageBox: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  topBox: {
    padding: 30,
    alignItems: 'center',
    width: "100%",
    justifyContent: 'center'
  },
  botBox: {
    padding: 30,
    justifyContent: 'center'
  },
  navButtonsWrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#9B5DE5',
    borderRadius: 60,
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
    color: '#222021'
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
  statisticPercent: {
    color: '#OOBBF9',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#OOBBF9',
  },
});
