import EmberRouter from '@ember/routing/router';
import config from 'network/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index');
  this.route('dhcp');
  this.route('contact');
  this.route('client-server');
  this.route('ip');
  this.route('dns');
  this.route('virtualisation');
  this.route('hypervisor');
});
