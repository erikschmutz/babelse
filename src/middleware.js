import parse from "./exampleDecorator";

const i = class {
  @parse
  name(params) {}
};

i.execute = function() {
  return 8;
};

export default out;
