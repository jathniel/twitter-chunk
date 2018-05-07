export default {
  splitMessage: (message) => {
    const LENGTH = message.length;
    if( LENGTH <= 50 )return new Array(message);

    let messageSize = getSize(LENGTH);
    let messageArray = split(message, messageSize);
    messageArray = messageArray.map((message, index) => {
      return `${index + 1}/${messageArray.length} ${message}`;
    });
    return messageArray;
  }
};
const getSize = (messageLength) => {
  let length = Math.round(messageLength/50).toString().length;
  return 50 - (length + 2);
};
const split = (message, InitialLength) => {
  const messageArray = [];
  let messageLeft = message;
  let length = InitialLength;
  do {

    if(messageLeft.charAt(length) !== ' ' && messageLeft.length > InitialLength) {
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
