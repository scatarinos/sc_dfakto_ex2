odoo.define('sc_dfakto_ex2.timesheet_grid_timer_header_extend', function (require) {
    'use strict';

    const TimerHeader = require('timesheet_grid.TimerHeaderComponent');
    const { patch } = require('web.utils');

    patch(TimerHeader.prototype, "autofill-button", {        

        setup() {
          this._super(...arguments);
        },

        /**
         * @private
         * @param {MouseEvent} ev
         */
        async _onClickAutofill(event) {
            event.stopPropagation();

            this.trigger('autofill');

            // will force refresh - TODO: maybe better patch controller 
            this.trigger('stop_timer');
        },        
      });
      
      // TODO: patch ?
      TimerHeader.props = {
        taskId: {
            type: Number,
            optional: true
        },
        projectId: {
            type: Number,
            optional: true
        },
        taskName: {
            type: String,
            optional: true
        },
        projectName: {
            type: String,
            optional: true
        },
        stepTimer: Number,
        timer: Number,
        description: {
            type: String,
            optional: true
        },
        timerRunning: Boolean,
        addTimeMode: Boolean,
        timerReadOnly: {
            type: Boolean,
            optional: true
        },
        projectWarning: Boolean,
        onTimerStarted: Function,
        onTimerStopped: Function,
        onTimerUnlink: Function,
        onTimerEditProject: Function,
        onTimerEditTask: Function,
        onNewTimerValue: Function,
        onNewDescription: Function,
        onAutofill: Function,
        bus: Object,
    };

    TimerHeader.template = 'sc_dfakto_ex2.timesheet_grid_timer_header_template'
      
});
