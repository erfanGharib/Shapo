from . import jalali


def django_jalali(time):
    months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند']
    time_to_str = '{},{},{}'.format(time.year,time.month,time.day)
    time_to_tuple = jalali.Gregorian(time_to_str).persian_tuple()
    time_to_list = list(time_to_tuple)
    for index, month in enumerate(months):
        if time_to_list[1] == index +1:
            time_to_list[1] = month
            break

    result = '{},{},{}'.format(time_to_list[0], time_to_list[1], time_to_list[2])
    return result

