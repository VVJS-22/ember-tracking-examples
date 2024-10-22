import Route from '@ember/routing/route';

export default class StartRoute extends Route {
  queryParams = {
    greet: {
      refreshModel: false,
    },
  };

  model(model) {
    console.log(model);
    return model;
  }
}
