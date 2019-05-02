module.exports = function triangle(row) {
  if(row.length === 1) {
    return row;
  } else {
    let newRow = [];
    for(let i = 0; i < row.length; i += 1) {
      if (row[i + 1]) {
        if (row[i] === row[i + 1]) {
          newRow.push(row[i]);
        } else {
          newRow.push('RGB'.replace(row[i],'').replace(row[i + 1],''));
        }
      }
    }
    return triangle(newRow.join(''));  
  }
};