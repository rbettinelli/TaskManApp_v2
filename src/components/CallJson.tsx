function CallJson(sp: string, p: Map<string, Object>) {
  const URL = 'https://donenextapp.com/MyWebService.asmx/TASK?Req=';

  const convertStringToHex = (str: string) => {
    var charArray = Array.from(str);
    var hexOut = '';
    var arrayLength = charArray.length;
    for (var i = 0; i < arrayLength; i++) {
      hexOut += charArray[i].charCodeAt(0).toString(16);
    }
    return hexOut;
  };

  const urlBuilder = () => {
    var str = '';
    str = sp + '|';
    for (var [key, value] of p) {
      str += key + '=' + value + '~';
    }
    let stx = convertStringToHex(str);
    return stx;
  };

  var url = URL + urlBuilder();
  return url;
}

export default CallJson;
