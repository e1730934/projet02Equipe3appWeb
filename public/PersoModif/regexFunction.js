const day = new Date(1990,2, 0)
const daytostr = day.toUTCString()
const dayspplit = daytostr.split(' ')
console.log(parseInt(dayspplit[1]))