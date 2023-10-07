function useCat() {
  let name = 'tom';

  return [
    () => `Meow ${name}`,
    (newName) => name = newName
  ]
}

const [meow, setName] = useCat(); // call ends here but the inners fns will still have access to outer fn vars at the time of call(closures)
console.log(meow());
setName('tommy');
console.log(meow());
