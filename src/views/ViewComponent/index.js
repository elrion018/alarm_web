export function ViewComponent() {}

ViewComponent.prototype = {
  createElementWithAttributes: function (tagName, attributesObjects) {
    var element = document.createElement(tagName);

    for (var i = 0; i < attributesObjects.length; i++) {
      element[attributesObjects[i].name] = attributesObjects[i].value;
    }

    return element;
  },

  appendChildrenToElement: function (element, children) {
    for (var i = 0; i < children.length; i++) {
      element.appendChild(children[i]);
    }
  },

  getPtag: function (text, idValue) {
    var pTag;

    if (idValue) {
      pTag = this.createElementWithAttributes('p', [
        {
          name: 'id',
          value: idValue,
        },
      ]);

      pTag.innerHTML = text;

      return pTag;
    }

    pTag = document.createElement('p');
    pTag.innerHTML = text;

    return pTag;
  },

  getButtonTag: function (text, idValue, actionValue) {
    var attributesObjects = [];

    if (text) {
      attributesObjects.push({ name: 'innerHTML', value: text });
    }

    if (idValue) {
      attributesObjects.push({ name: 'id', value: idValue });
    }

    if (actionValue) {
      attributesObjects.push({ name: 'data-action', value: actionValue });
    }

    return this.createElementWithAttributes('button', attributesObjects);
  },

  getInputTag: function (idValue, typeValue, placeholderValue) {
    var attributesObjects = [];

    if (idValue) {
      attributesObjects.push({ name: 'id', value: idValue });
    }

    if (typeValue) {
      attributesObjects.push({ name: 'type', value: typeValue });
    }

    if (placeholderValue) {
      attributesObjects.push({ name: 'placeholder', value: placeholderValue });
    }

    return this.createElementWithAttributes('input', attributesObjects);
  },

  getDivTag: function (idValue) {
    var attributesObjects = [];

    if (idValue) {
      attributesObjects.push({ name: 'id', value: idValue });
    }

    return this.createElementWithAttributes('div', attributesObjects);
  },

  getOptionTag: function (text, value) {
    var attributesObjects = [];

    if (text) {
      attributesObjects.push({ name: 'innerHTML', value: text });
    }

    if (value) {
      attributesObjects.push({ name: 'value', value: value });
    }

    return this.createElementWithAttributes('option', attributesObjects);
  },

  getSelectTag: function (idValue) {
    var attributesObjects = [];

    if (idValue) {
      attributesObjects.push({ name: 'id', value: idValue });
    }

    return this.createElementWithAttributes('select', attributesObjects);
  },
};
