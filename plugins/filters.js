import Vue from 'vue'
import moment from 'moment'

Vue.filter('capitalize', val => val.toUpperCase());

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
  });

  // Vue.filter('extrait', function(value) {
  //   if (value) {
  //     return toString(value.replace(/^(.{120}[^\s]*).*/, "$1"));
  //   }
  // });


