const firstItem = { 
  title: 'Transformers', 
  year: 2007 
};
console.log(JSON.stringify(firstItem));

const secondItem = { 
  title: 'Transformers', 
  year: 2007, 
  starring: new Map([[0, 'Shia LaBeouf'],[1, 'Megan Fox']])
};

console.log(JSON.stringify(secondItem));

console.log(JSON.stringify(secondItem, ['title']));

console.log(JSON.stringify(secondItem, (key, value) => {
  if (value instanceof Map) {
    return [...value.values()];
  }
  return value;
}));

console.log(JSON.stringify(secondItem, (key, value) => {
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}));

console.log(JSON.stringify(secondItem, null, 2));

console.log(JSON.stringify(secondItem, null, '🦄'));

const thirdItem = { 
  title: 'Transformers', 
  year: 2007, 
  starring: new Map([[0, 'Shia LaBeouf'],[1, 'Megan Fox']]),
  toJSON() {
    return { 
      name: `${this.title} (${this.year})`, 
      actors: [...this.starring.values()] 
    };
  }
};

console.log(JSON.stringify(thirdItem));