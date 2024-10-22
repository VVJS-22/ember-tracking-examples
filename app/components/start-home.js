import Component from '@glimmer/component';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class StartHome extends Component {
  @alias('args.greeting') greeting;
  @service router;

  @action
  changeData(greeting, greet) {
    this.router.transitionTo('start', 'Hello', { queryParams: { greet } });
  }
}
