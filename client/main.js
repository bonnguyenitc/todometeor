import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  if(Meteor.isClient){
    console.log("chạy ở client");
  }
  if(Meteor.isServer){
    console.log("chạy ở server");
  }
  if(Meteor.isCordova){
    console.log("chạy ở điện thoại");
  }
  if(Meteor.isDevelopment){
    console.log("chạy ở môi trường phát triển");
  }
  if(Meteor.isProduction){
    console.log("chạy ở môi trường sản phẩm");
  }
  Meteor.subscribe('hello',)

  render(<App />, document.getElementById('render-target'));
});