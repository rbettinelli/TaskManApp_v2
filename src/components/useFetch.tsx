import { useState, useEffect } from 'react';

const useFetch = (sp: string, obj: Map<string, Object>) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  var url = '';

  const convertStringToHex = (str: string) => {
    var charArray = Array.from(str);
    var hexOut = '';
    var arrayLength = charArray.length;
    for (var i = 0; i < arrayLength; i++) {
      hexOut += charArray[i].charCodeAt(0).toString(16);
    }
    return hexOut;
  };

  useEffect(() => {
    const urlBuilder = () => {
      var str = '';
      str = sp + '|';

      for (var [key, value] of obj) {
        str += key + '=' + value + '~';
      }
      let stx = convertStringToHex(str);
      url = 'https://donenextapp.com/MyWebService.asmx/TASK?Req=' + stx;
      return url;
    };

    urlBuilder();
    fetch(url)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => setError(err));
  }, [url]);

  return { data, error };
}

export default useFetch;
