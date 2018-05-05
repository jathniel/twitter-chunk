export default {
  splitMessage: (message) => {
    const length = message.length;
    if( length < 50 )return new Array(message);
    let messageArray = split(message, 50);
    messageArray = messageArray.map((message, index) => {
      return `${index + 1}/${messageArray.length} ${message}`;
    });
    return messageArray;
  }

};
const split= (message, InitialLength) => {
  const messageArray = [];
  let messageLeft = message;
  let length = InitialLength;
  do {

    if(messageLeft.charAt(length - 1) !== ' ' && messageLeft.length > InitialLength) {
      length--;
    } else {
      messageArray.push(messageLeft.substring(0, length).trim());
      messageLeft = messageLeft.substring(length, messageLeft.length);
      length = InitialLength;
    }
    if(length === 0 && messageLeft.length > InitialLength) {
      throw 'unsplittable';
    }
  } while (messageLeft.length > 0);

  return messageArray;
};
