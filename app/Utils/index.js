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
  let length = numberCount(Math.round(messageLength/50));
  return 50 - (length + 2);
};
const numberCount = (number) => {
  return number.toString().length;
};
const split = (message, InitialLength) => {
  const messageArray = [];
  let messageLeft = message;
  let length = InitialLength;
  let count = 1;
  do {

    if(messageLeft.charAt(length) !== ' ' && messageLeft.length > InitialLength) {
      length--;
    } else {
      messageArray.push(messageLeft.substring(0, length).trim());
      messageLeft = messageLeft.substring(length + 1, messageLeft.length);
      length = InitialLength  - (numberCount(count));
      count++;
    }
    if(length === 0 && messageLeft.length > InitialLength) {
      throw 'unsplittable';
    }

  } while (messageLeft.length > 0);

  return messageArray;
};
