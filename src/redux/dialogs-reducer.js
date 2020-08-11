const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
      {id: 1, name: "Dima"},
      {id: 2, name: "Andrey"},
      {id: 3, name: "Sveta"},
      {id: 4, name: "Sasha"},
      {id: 5, name: "Viktor"},
      {id: 6, name: "Valera"}
  ],
  messages: [
      {id: 1, message: "Hi!"},
      {id: 2, message: "How are you?"},
      {id: 3, message: "Yo!"},
      {id: 4, message: "Yo!"},
      {id: 5, message: "Yo!"}
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
            //state.newMessageBody = action.body;
            //return state;
          }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = stateCopy.newMessageBody;
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push( { id: 6,message: body } );
            stateCopy.newMessageBody = "";
            return stateCopy;
            //let body = state.newMessageBody;
            //state.messages.push( { id: 6,message: body } );
            //state.newMessageBody = "";
            //return state;
          }
        default: 
            return state;
    };
};

export const sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE
    };
  };
export const updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
    };
  };
  
export default dialogsReducer;
