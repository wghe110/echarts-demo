// 扁平数组转成树
export function arrayToTreeFn(arr = [], id = 'id', parentId = 'parentId') {
  const res = [];
  const map = new Map();

  for (const item of arr) {
    const val = {
      ...item,
      children: map.has(item[id]) ? map.get(item[id]).children : [],
    };
    map.set(item[id], val);

    const newChild = map.get(item[id]);
    if (item[parentId] === '0') {
      res.push(newChild);
    } else {
      if (!map.has(item[parentId])) {
        map.set(item[parentId], {
          children: [],
        });
      }
      map.get(item[parentId]).children.push(newChild);
    }
  }
  return res;
}