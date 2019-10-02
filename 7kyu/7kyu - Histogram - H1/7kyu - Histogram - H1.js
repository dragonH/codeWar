module.exports = function histogram(results) {
  return results.reverse()
                .map((result, index) => `${results.length - index}|${'#'.repeat(result)}${result > 0 ? ` ${result}` : ''}\n`).join('')
}