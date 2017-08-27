import React, { PureComponent } from "react";
import generateSchema from 'json-to-graphql'
import stringify from "stringify-object"
import Layout from "../components/Layout";
import ConversionPanel from "../components/ConversionPanel";
import defaultText from "../utils/dummy-json";

export default class Json2GraphQl extends PureComponent {
  getTransformedValue = newValue => {
    const value = JSON.parse(newValue)
    return generateSchema(value)
  };

  render() {
    return (
      <Layout pathname={this.props.url.pathname}>
        <ConversionPanel
          leftTitle="JSON"
          rightTitle="GraphQL Schema"
          getTransformedValue={this.getTransformedValue}
          name={"graphql"}
          defaultText={defaultText}
          leftMode="json"
          rightMode="javascript"
          url={this.props.url}
        />
      </Layout>
    );
  }
}
