import { VNode } from "vue";
import { Component } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";
import { HelloWorld } from "./components/HelloWorld";

type AppProps = {};

@Component
export class App extends tsx.Component<AppProps> {
  render(): VNode {
    return (
      <div>
        <HelloWorld />              {/* no required `msg` prop */}
        <HelloWorld msg={123} />    {/* `msg` should be String, not Number */}
        <HelloWorld msg={"123"} />  {/* `msg` should be String, not Number */}
      </div>
    );
  }
}
