export  function  arrayToTreeNode(array,pid='0') {
  let treeData =[];
  if(array.length>0){
    let parentData = array.filter(parent=>parent.pid===pid);
    for(let d of parentData){
      let children = array.filter(sub=>sub.pid === d.id);
      treeData.push({...d,children})
    }
  }
  return treeData;
}
