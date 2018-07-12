class User {
  constructor(data) {
    this.data = data || {};
  }

  getProp(name) {
    if (typeof name === "string") {
      let result = this.data;

      name = name.split(".");

      name.forEach(nameSpace => {
        result = result[nameSpace];
      });

      return result;
    }

    return null;
  }

  setProp(name, value) {
    if (typeof name === "string") {
      let result = this.data;

      name = name.split(".");

      name.forEach((nameSpace, i) => {
        if (i === name.length - 1) {
          result[nameSpace] = value;
        } else {
          result = result[nameSpace];
        }
      });
    }
  }
}

export default User;
