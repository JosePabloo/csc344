### Install the dependencies

The command `cd`, also known as `chdir` (**ch**ange **dir**ectory), is a command-line OS shell command used to change the current working directory.

```
cd <directory>
```

The command `yarn install` is a [Yarn](https://yarnpkg.com) command-line utility which is used to install all dependencies for a project. This is most commonly used when you have just checked out code for a project, or when another developer on the project has added a new dependency that you need to pick up.

```
yarn install
```

### Run the app

The command `yarn start` is another Yarn command-line utility which is used to run the app in development mode. Open http://localhost:3000 to view it in the browser. The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

```
yarn start
```



### Deploy Firebase rules and functions

The command `npm install` is an [npm](https://www.npmjs.com) command-line utility which is used to install the dependencies in the local `node_modules` folder. In global mode (i.e., with `-g` or `--global` appended to the command), it installs the current package context as a global package. The Firebase CLI provides a variety of tools for managing, viewing, and deploying to Firebase projects.

```
npm install -g firebase-tools
```

The command `firebase login` is a [Firebase](https://firebase.google.com) command-line utility which is used to sign into Firebase using your Google account and connects your local machine to Firebase and grants you access to your Firebase projects.

```
firebase login
```

The command `firebase list` is another Firebase command-line utility which is used to print a list of all of your Firebase projects. Use it to test that authentication worked (and to list all of your Firebase projects), the displayed list should be the same as the Firebase projects listed in the [Firebase console](https://console.firebase.google.com).

```
firebase list
```

The command `firebase init` is yet another Firebase command-line utility which is used to set up a new Firebase project in the current directory. This command will create a `firebase.json` configuration file in the current directory.

```
firebase init
```

The command `firebase deploy` is also a Firebase command-line utility which is used to deploy code and assets from your project directory to your Firebase project.

```
firebase deploy --only firestore:rules,storage,functions
```

## License

React + Material-UI + Firebase is open-source software [licensed as MIT](https://github.com/Phoqe/react-material-ui-firebase/blob/master/LICENSE.md).
