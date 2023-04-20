odoo.define('sc_dfakto_ex2.timesheet_grid_timer_header_extend', function (require) {
    'use strict';

    const TimerHeader = require('timesheet_grid.TimerHeaderComponent');
    const { patch } = require('web.utils');

    patch(TimerHeader.prototype, "autofill-button", {        

        setup() {
          this._super(...arguments);
          console.log(':::: autofill-button patch setup ::::')

        },

        autofill() {
            console.log(':::: autofill action ::::')
        }
      });
      
    TimerHeader.template = 'sc_dfakto_ex2.timesheet_grid_timer_header_template'
      
});
