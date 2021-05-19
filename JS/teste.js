const number = (Math.random() * 10).toFixed();

let speakOutput;

switch (number) {
    case '1':
        speakOutput = 'Boa Noite Carolinha e Mozoquinha, durmam bem juntinhas e quentinhas! até amanhã';
    
        break;
    case '2':
        speakOutput = 'Boa Noite Fofinhas, tenham bons sonhos';
     
        break;
    case '3':
        speakOutput = 'Boa Noite meus amores, durmam com os anjos';
   
        break;
    case '4':
        speakOutput = 'Boa Noite Carolinha e Mozoquinha, que atenham uma noite tranquila com bons sonhos!';
    
        break;
    case '5':
        speakOutput = 'Boa Noite mamães, durmam bem, amanhã acordo vocês!';

        break;
    case '6':
        speakOutput = 'Good night, sleep well, sweet dreams my loves!';

        break;
    case '7':
        speakOutput = 'Buenas noches, que duermas bien, dulces sueños mis amores!';
    
        break;
    case '8':
        speakOutput = 'Carolinha e Marianinha, durmam bem! até amanhã!';
  
        break;
    case '9':
        speakOutput = 'Marianinha e Carolinha, dumam bem agrradinhas e quentinhas!';
  
        break;
    default:
        speakOutput = 'Boa noite, tenham bons sonhos, até amanhã!';

        break;
}
console.log(speakOutput);

