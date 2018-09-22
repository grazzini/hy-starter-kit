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

  if (dt < new Date("2018-09-11")) { return "/unit-1/w4.html#_9-10-byrd-byrd-byrd" }
  if (dt < new Date("2018-09-12")) { return "/unit-1/w4.html#_9-11-drill" }
  if (dt < new Date("2018-09-13")) { return "/unit-1/w4.html#_9-12-text-setting-and-word-painting" }
  if (dt < new Date("2018-09-14")) { return "/unit-1/w4.html#_9-13-drill" }
  if (dt < new Date("2018-09-15")) { return "/unit-1/w4.html#_9-14-the-seconda-pratica" }

  if (dt < new Date("2018-09-18")) { return "/unit-1/w5.html#_9-17-monteverdi" }
  if (dt < new Date("2018-09-19")) { return "/unit-1/w5.html#_9-18-drill-listening-exam-review" }
  if (dt < new Date("2018-09-20")) { return "/unit-1/w5.html#_9-19-listening-exam-1" }
  if (dt < new Date("2018-09-21")) { return "/unit-1/w5.html#_9-20-drill-written-exam-review" }
  if (dt < new Date("2018-09-22")) { return "/unit-1/w5.html#_9-21-written-exam-1" }

  if (dt < new Date("2018-09-25")) { return "/unit-2/w6.html#_9-24-the-baroque-era" }
  if (dt < new Date("2018-09-26")) { return "/unit-2/w6.html#_9-25-drill" }
  if (dt < new Date("2018-09-27")) { return "/unit-2/w6.html#_9-26-basso-ostinato-variations" }
  if (dt < new Date("2018-09-28")) { return "/unit-2/w6.html#_9-27-drill" }
  if (dt < new Date("2018-09-29")) { return "/unit-2/w6.html#_9-28-the improvised-prelude" }

  return "/unit-2"
}
