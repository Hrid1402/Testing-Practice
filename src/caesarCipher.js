function cipher(text, key){
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = "";
    for(let i=0; i<text.length; i++){
        if(alphabet.includes(text[i].toLowerCase())){
            let index = alphabet.indexOf(text[i].toLowerCase())+key;
            if(index > 25){
                index = index-26;
            }
            if(text[i] == text[i].toUpperCase()){
                result += alphabet[index].toUpperCase();
            }else{
                result += alphabet[index];
            }
        }
        else{
            result += text[i];
        }
    }
    return result;
}
export {cipher}; 