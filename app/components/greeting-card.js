import Component from '@glimmer/component';
import { alias } from '@ember/object/computed';

export default class GreetingCard extends Component {
  @alias('args.greeting') greeting;
  @alias('args.greet') greet;

  get greetingData() {
    return `${this.greeting} Jayesh, ${this.greet}`;
  }
}
