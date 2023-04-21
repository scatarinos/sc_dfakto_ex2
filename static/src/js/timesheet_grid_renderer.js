odoo.define('sc_dfakto_ex2.timesheet_grid_renderer_extend', function (require) {
    'use strict';

    const GridRenderer = require('timesheet_grid.TimerGridRenderer');
    const { patch } = require('web.utils');

    patch(GridRenderer.prototype, "autofill", {        

        async _onAutofill() {
            const {range, timeBoundariesContext } = this.props
            await this.rpc({
                model: 'account.analytic.line',
                method: 'action_autofill',
                args: [range, timeBoundariesContext.start, timeBoundariesContext.end],
            });
        }

      });
});
