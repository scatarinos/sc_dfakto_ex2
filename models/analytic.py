# -*- coding: utf-8 -*-
import re
import ast

from datetime import date, datetime, timedelta
from dateutil.relativedelta import relativedelta
from dateutil.rrule import SU
from lxml import etree
from collections import defaultdict

from odoo import tools, models, fields, api, _
from odoo.addons.resource.models.resource import make_aware
from odoo.exceptions import UserError, AccessError
from odoo.osv import expression

import logging

_logger = logging.getLogger(__name__)

class ScDFaktoEx2AnalyticLine(models.Model):
    _name = 'account.analytic.line'
    _inherit = ['account.analytic.line', 'timer.mixin']


    @api.model
    def action_autofill(self, date_range, start, end):

        employee = self.env['hr.employee'].search([('user_id', '=', self.env.uid)], limit=1)
        # TODO: get contract info ?

        start_date = datetime.strptime(start, '%Y-%m-%d').date()
        end_date = datetime.strptime(end, '%Y-%m-%d').date()

        delta = end_date - start_date

        for i in range(delta.days + 1):
            date = start_date + timedelta(days=i)

            # TODO: fill this according the employee contract and if it is available or not
            timesheet_id = self.create({
                'date': date,
                'name': 'autofill',
                'project_id': 1,
                'task_id': False,
                'unit_amount': (3600 * 7.5) / 3600 # TODO 
            })

        return delta
