import getFreeDomainsCount from "../dist/index.js"

test('should be empty', () => {
 expect(getFreeDomainsCount([])).toEqual({});
});

test('should be equal', () => {
  const emails = [
    'info@gmail.com',
    'info@yandex.ru',
    'info@hotmail.com',
    'mk@host.com',
    'support@hexlet.io',
    'key@yandex.ru',
    'sergey@gmail.com',
    'vovan@gmail.com',
    'vovan@hotmail.com',
  ];
  const expected = {
    'gmail.com': 3,
    'yandex.ru': 2,
    'hotmail.com': 2,
  };
  expect(getFreeDomainsCount(emails)).toEqual(expected);
});