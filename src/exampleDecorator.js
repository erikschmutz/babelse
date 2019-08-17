function parse(target, name, descriptor) {
  const oldValue = descriptor.value();

  console.log(descriptor);
  descriptor.value = input => {
    console.log("Here is the input you wanted sir", input);
    return `${oldValue} has been boomified!!!`;
  };

  return descriptor;
}

export default parse;
