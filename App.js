import * as React from "react";
import { WebView } from "react-native-webview";

export default class App extends React.Component {
  render() {
    return (
      <WebView 
      source={{ uri: 'http://shrdashboard.dghs.gov.bd:5985/' }} 
      style={{ marginTop: 40}} 
      />
    );
  }
}