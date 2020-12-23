const calculator = {
    capitalize : (text)=>{
        if(	typeof(text) == 'string') return text.charAt(0).toUpperCase() + text.slice(1);
        else return text;
    },
    reverseString : (text)=>{
        if(	typeof(text) == 'string') return text.split('').reverse().join('');
        else return text;
    }
}
  export default calculator;