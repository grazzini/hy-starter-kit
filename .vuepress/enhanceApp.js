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

  if (dt < new Date("2018-08-28")) { return "/unit-1/w2.html#_8-27-more-about-cadences" }
  if (dt < new Date("2018-08-29")) { return "/unit-1/w2.html#_8-28-drill" }
  if (dt < new Date("2018-08-30")) { return "/unit-1/w2.html#_8-29-pre-existing-material" }
  if (dt < new Date("2018-08-31")) { return "/unit-1/w2.html#_8-30-drill" }
  if (dt < new Date("2018-09-01")) { return "/unit-1/w2.html#_8-31-missa-benedicta-es" }

  if (dt < new Date("2018-09-05")) { return "/unit-1/w3.html#_9-04-drill" }
  if (dt < new Date("2018-09-06")) { return "/unit-1/w3.html#_9-05-the-hexachord" }
  if (dt < new Date("2018-09-07")) { return "/unit-1/w3.html#_9-06-drill" }
  if (dt < new Date("2018-09-08")) { return "/unit-1/w3.html#_9-07-missa-hercules-dux-ferrariae" }

  return "/unit-1"
}
