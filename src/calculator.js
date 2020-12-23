const calculator = {
    capitalize : (text)=>{
        if(	typeof(text) == 'string') return text.charAt(0).toUpperCase() + text.slice(1);
        else return text;
    },
    reverseString : (text)=>{
        if(	typeof(text) == 'string') return text.split('').reverse().join('');
        else return text;
    },
    sum : (a, b)=>{
        if(	typeof(a) == 'number' && typeof(b) == 'number') return a+b;
        else return null;
    },
    subtract : (a,b)=>{
        if(	typeof(a) == 'number' && typeof(b) == 'number') return a-b;
        else return null;
    },
    product : (a,b)=>{
        if(	typeof(a) == 'number' && typeof(b) == 'number') return a*b;
        else return null;
    },
    split : (a,b)=>{
        if(	typeof(a) != 'number' || typeof(b) != 'number') return null;
        else if (b==0) return undefined;
        else return a/b;
    }
}
  export default calculator;