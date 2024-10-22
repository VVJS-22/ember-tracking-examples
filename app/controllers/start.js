import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class StartController extends Controller {
    @tracked greet;
    
    get isChangesGreet() {
        return `Yes ${this.greet} is chaged`; 
    }
}
