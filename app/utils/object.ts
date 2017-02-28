function without(object, fields) {
  return Object.keys(object)
    .reduce((newObject, fieldName) => {
      if (!fields.includes(fieldName)) {
        newObject[fieldName] = object[fieldName];
      }
      return newObject;
    }, {});
}

export {without};
