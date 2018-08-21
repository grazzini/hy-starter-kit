export default ({ router }) => {
  router.beforeEach((to, from, next) => { 
    if (to.path === '/') {
      router.replace(currentHomePage())
    } else {
      next()
    }
  })
}

function currentHomePage() {
  var dt = Date.now()

  if (dt < new Date("2018-08-23")) { return "/unit-1/w1.html#_8-22-cadences-missa-pange-lingua" }
  if (dt < new Date("2018-08-24")) { return "/unit-1/w1.html#_8-23-drill" }
  if (dt < new Date("2018-08-25")) { return "/unit-1/w1.html#_8-24-modes-missa-beata-vergine" }

  return "/unit-1"
}
