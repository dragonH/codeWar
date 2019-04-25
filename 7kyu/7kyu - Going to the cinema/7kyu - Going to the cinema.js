module.exports = function movie(card, ticket, perc) {
  let systemA = 0;
  let systemB = card;
  let counter = 1
  for(let i = 1;; i += 1) {
    systemA = ticket * i;
    systemB = systemB + ticket * Math.pow(perc, i);
    if (systemA > Math.ceil(systemB)) {
      counter = i;
      return counter;
    }
  }
};