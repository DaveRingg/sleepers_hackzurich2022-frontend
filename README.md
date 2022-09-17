# Sleepers - HackZurich 2022 Challenge #9 - Frontend (React Native)
## Development enviroment
### Setup Node & Watchmen
```
$ brew install node
$ brew install watchman
```
### Ruby
React Native uses a .ruby-version file to make sure that your version of Ruby is aligned with what is needed. Currently, macOS 12.5.1 is shipped with Ruby 2.6.8, which is not what is required by React Native. Our suggestion is to install a Ruby version manager and to install the proper version of Ruby in your system.

- rbenv (https://github.com/rbenv/rbenv)

To check current ruby version:
```
$ ruby --version
```

#### Installation
Install Mac
```
$ brew install rbenv ruby-build
```
Setup rbenv in shell
```
rbenv init
source ~/.bash_profile
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
```

### Bundler
https://bundler.io

### Cocoapods
https://cocoapods.org/

## Create new React Application
Uninstall current react native version!
```
$ npm uninstall -g react-native-cli @react-native-community/cli
```
Create new Project
```
$ npx react-native init AwesomeProject
```

## Running your React Native application​
### Step 1: Start Metro
To start Metro, run npx react-native start inside your React Native project folder:
```
$ npx react-native start
```
### Step 2: Start your application​
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:
```
$ npx react-native run-ios
```
### Edit your application
Hit ⌘R in your iOS Simulator to reload the app and see your changes!