import { get } from 'lodash';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

export default (emails) => {
  const servers = emails.map((i) => i.split('@')[1]);
  const freeServers = servers.filter((i) => freeEmailDomains.includes(i));
  const result = freeServers.reduce(
    (acc, i) => {
      const value = get(acc, i, 0);
      return { ...acc, [i]: value + 1 };
    }, {}
  );
  return result;
};