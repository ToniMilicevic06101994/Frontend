import jstz from 'jstz';
import Moment from 'moment';
require('moment-timezone');

let DateHelper = {
  // TODO Document DateHelper
  // TODO Use timestamps instead of dates

  /**
   * Convert moment to date by reseting time to 00:00
   * It uses UTC and removes time zone offset
   * @param moment
   * @returns {*}
   */
  clearTime(moment) {
    return moment.utc().startOf('day');
  },

  /**
   * Base date/time based on config
   * It can be current date, without time, or current timestamp
   * @param  {object} config Object with configuration
   * @return {object}        Moment object
   */
  getBaseTime(config) {
    config = config || {};
    var t = this.today(); // Default is begining of the day (time is cleared)
    if (config.timestamp) {
      t = this.now();
    }
    return t;
  },

  localTZOffset() {
    return (new Date()).getTimezoneOffset();
  },

  guessTimezone() {
    return jstz.determine();
  },

  formatWithTimezone(timestamp, format) {
    // const date    = Moment(timestamp).format('YYYY-MM-DD'); // cut off only date
    // const time    = Moment().format('hh:mm a'); // cut off only time from today's datetime
    // const newDate = Moment(date + 'T' + time + 'Z'); // put together date and time and attach timezone
    // const tzTime  = newDate.tz(this.guessTimezone().name());

    return timestamp.format();
  },

  formatDateTimeInLocalTimezone(timestamp) {
    const datetime = timestamp.tz(this.guessTimezone().name());
    datetime.set({hour: '09', minute: '00', second: '00'});
    return datetime.format();
  },

  now() {
    return Moment().format();
  },

  nowWithTimeZone() {
    return new Moment();
  },

  today() {
    return this.clearTime(this.now());
  },

  tomorrow(config) {
    let momentTime = Moment().add(1, 'day');
    momentTime.set({hour: '09', minute: '00', second: '00'});
    return momentTime;
  },

  in3days(config) {
    var momentTime = Moment();
    momentTime.add(3, 'day');
    momentTime.set({hour: '09', minute: '00', second: '00'});
    return momentTime;
  },

  nextWeek(config) {
    var momentTime = Moment();
    momentTime.add(1, 'week');
    momentTime.set({hour: '09', minute: '00', second: '00'});
    return momentTime;
  },

  endOfThisMonth() {
    return this.clearTime(this.today().endOf('month'));
  },

  nextMonth(config) {
    var momentTime = Moment();
    momentTime.add(1, 'month');
    momentTime.set({hour: '09', minute: '00', second: '00'});
    return momentTime;
  },

  in3Months(config) {
    var momentTime = Moment();
    momentTime.add(3, 'month');
    momentTime.set({hour: '09', minute: '00', second: '00'});
    return momentTime;
  },

  endOfNextMonth() {
    return this.clearTime(this.today().add(1, 'month').endOf('month'));
  },

  endOfThisQuarter() {
    return this.clearTime(this.today().endOf('quarter'));
  },

  nextQuarter() {
    return this.clearTime(this.today().add(1, 'quarter').startOf('quarter'));
  },

  endOfNextQuarter() {
    return this.clearTime(this.today().add(1, 'quarter').endOf('quarter'));
  },

  aliasToDate(alias, config) {
    if (alias === 'now') {
      return this.now();
    }
    if (alias === 'tomorrow') {
      return this.tomorrow(config);
    }
    if (alias === 'next_week') {
      return this.nextWeek(config);
    }
    if (alias === 'end_of_this_month') {
      return this.endOfThisMonth();
    }
    if (alias === 'next_month') {
      return this.nextMonth(config);
    }
    if (alias === 'in_3_months') {
      return this.in3Months(config);
    }
    if (alias === 'end_of_next_month') {
      return this.endOfNextMonth();
    }
    if (alias === 'end_of_this_quarter') {
      return this.endOfThisQuarter();
    }
    if (alias === 'next_quarter') {
      return this.nextQuarter();
    }
    if (alias === 'end_of_next_quarter') {
      return this.endOfNextQuarter();
    }
    return false;
  },

  toDate(dateString, format) {
    format = format || "YYYY-MM-DD hh:mm a";

    if (format === 'unix') {
      return Moment.unix(dateString);
    }
    return (Moment(dateString).isValid()) ? Moment.utc(dateString, format) : null;
  },

  toDateTime(dateString, format) {
    if (format === 'unix') {
      return Moment.unix(dateString);
    }
    return (Moment(dateString).isValid()) ? Moment(dateString, format) : null;
  },

  sorterASC(moment1, moment2) {
    return moment1.diff(moment2);
  },

  sorterDESC(moment1, moment2) {
    return moment2.diff(moment1);
  },

  getBusinessDaysInPeriod(start, end) {
    var first = start.clone().endOf('week'), // end of first week
      last = end.clone().startOf('week'), // start of last week
      days = last.diff(first, 'days') * 5 / 7, // this will always multiply of 7
      wfirst = first.day() - start.day(), // check first week
      wlast = end.day() - last.day(); // check last week

    if (start.day() === 0) {
      --wfirst; // -1 if start with sunday
    }
    if (end.day() === 6) {
      --wlast; // -1 if end with saturday
    }

    return Math.trunc(wfirst + days + wlast);
  },

  getBusinessDaysCount(period) {
    var today = Moment(),
      start = Moment().startOf(period),
      end = Moment().endOf(period);

    return {
      remaining: this.getBusinessDaysInPeriod(today, end),
      spent: this.getBusinessDaysInPeriod(start, today) - 1,
      total: this.getBusinessDaysInPeriod(start, end)
    }
  },

  getDaysInMonth() {
    return Moment().daysInMonth();
  },

  getSpentDaysInMonth() {
    return Moment().date();
  },

  getRemainingDaysInMonth() {
    const totalDaysInMonth = this.getDaysInMonth();
    const todaysDay = this.getSpentDaysInMonth();
    return totalDaysInMonth - todaysDay;
  },

  isMoment(date) {
    return Moment.isMoment(date);
  }
}

export default DateHelper;
