const user = {
  name: 'foo',
  joined: '2000-02-02',
  // info: { foo: 'foo', bar: 'bar' }
};

for (const [key, value] of Object.entries(user)) {
  console.log(`key=${key}, value=${value}`);
}