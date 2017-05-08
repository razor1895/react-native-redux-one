import config from './config';

export const formatDate = (source) => {
  const date = new Date(source);
  const dateTime = date.getTime();
  const nowTime = new Date().getTime();
  const hours = (nowTime - dateTime) / (1000 * 60 * 60);
  const day = parseInt(hours / 24, 10);
  let returnDateStr = '';

  if (hours < 24) {
    returnDateStr = `${parseInt(hours, 10)}小时前`;
  } else if (day > 3) {
    const year = date.getFullYear();
    const month = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'][date.getDay()];

    returnDateStr = `${date.getDate()} ${month}${year}`;
  } else {
    returnDateStr = `${day}天前`;
  }

  return returnDateStr;
};

export const getCurrentId = () => {
  const dateTime = new Date().getTime();
  const baseTime = new Date(config.baseTime).getTime();
  const day = (dateTime - baseTime) / (1000 * 60 * 60 * 24);

  return config.baseId + parseInt(day, 10);
};
