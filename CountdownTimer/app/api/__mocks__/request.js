const users = {
    1: {time: '30'},
    2: {time: '120'},
  };
  
  export default function request(url) {
    return new Promise((resolve, reject) => {
      const userID = parseInt(url.substr('/users/'.length), 7);
      process.nextTick(
        () =>
          users[userID]
            ? resolve(users[userID])
            : reject({
                error: 'User with ' + userID + ' not found.',
              }),
      );
    });
  }