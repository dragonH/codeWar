module.exports =  function maskify(str){
  return `${str.slice(0, -4).replace(/./g, '#')}${str.slice(-4)}`;
}
