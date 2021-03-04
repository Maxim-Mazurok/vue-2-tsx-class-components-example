import { VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";
import * as tsx from "vue-tsx-support";

type HelloWorldProps = {
  msg: string;
};

@Component
export class HelloWorld extends tsx.Component<HelloWorldProps> {
  @Prop({ type: String, required: true }) private msg!: string;

  render(): VNode {
    return <h1>{this.msg}</h1>;
  }
}
