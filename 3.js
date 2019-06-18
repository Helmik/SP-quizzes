function addBusinessTime(holiday, time, duration) {
	var holidaySD = +holiday.start;
	var holidayED = +holiday.end;
	var realDuration = duration * 1000;
	var positive = duration >= 0 ? true : false;
	var startDate = positive ? +time : +time + duration * 1000;
	var endDate = positive ? +time + duration * 1000 : +time;

	if (holidayED <= startDate || holidaySD >= endDate) {
		return positive ? new Date(endDate) : new Date(startDate + realDuration);
	}

	if (positive) {
		if (holidaySD < startDate) {
			return new Date(holidayED + realDuration);
		}
		return  new Date(startDate + (holidayED - holidaySD) + realDuration);	
	}

	// Duration negative
	if (holidayED > endDate) {
		return new Date(realDuration - holidaySD);
	}
	return new Date(endDate - (holidayED - holidaySD) + realDuration);	
}