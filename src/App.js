import { CometChat } from "@cometchat-pro/chat";

// const appID = process.env.REACT_COMETCHAT_APP_ID;
const appID = '2507764710a3925c';
// const region = process.env.REACT_COMETCHAT_REGION;
const region = 'eu';
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

CometChat.init(appID, appSetting).then(
  () => {
    // console.log("App ID:", appID);
    // console.log("Region:", region);

    console.log("Initialization completed successfully");
  },
  (error) => {
    // console.log("App ID:", appID);
    // console.log("Region:", region);

    console.log("Initialization failed with error: ", error);
  }
);

//  >>>Create user function
// let authKey = process.env.REACT_COMETCHAT_AUTH_KEY;
let authKey = '7c3647de908c6af2ffca23b005806341a3a94314';
var uid = "user1";
var name = "Driss";

// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//     user => {
//         console.log("user created", user);
//     },error => {
//       console.log(authKey)
//         console.log("error creating user", error);
//     }
// )

//   >>>Login User

CometChat.login(uid, authKey).then(
  user => {
    console.log("Login Successful:", { user });    
  },
  error => {
    console.log("Login failed with exception:", { error });    
  }
);
function App() {
  return <h1>CometCHat App React Exmaple</h1>;
}

export default App;
