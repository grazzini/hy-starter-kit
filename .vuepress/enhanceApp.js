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
  if (dt < new Date("2018-09-29")) { return "/unit-2/w6.html#_9-28-the-improvised-prelude" }

  if (dt < new Date("2018-10-02")) { return "/unit-2/w7.html#_10-01-the-baroque-suite" }
  if (dt < new Date("2018-10-03")) { return "/unit-2/w7.html#_10-02-drill" }
  if (dt < new Date("2018-10-04")) { return "/unit-2/w7.html#_10-03-the-sonata-da-chiesa" }
  if (dt < new Date("2018-10-05")) { return "/unit-2/w7.html#_10-04-drill" }
  if (dt < new Date("2018-10-06")) { return "/unit-2/w7.html#_10-05-fall-break" }

  if (dt < new Date("2018-10-09")) { return "/unit-2/w8.html#_10-08-ritornello-forms" }
  if (dt < new Date("2018-10-10")) { return "/unit-2/w8.html#_10-09-drill" }
  if (dt < new Date("2018-10-11")) { return "/unit-2/w8.html#_10-10-the-baroque-fugue" }
  if (dt < new Date("2018-10-12")) { return "/unit-2/w8.html#_10-11-drill" }
  if (dt < new Date("2018-10-13")) { return "/unit-2/w8.html#_10-12-more-on-the-fugue" }

  if (dt < new Date("2018-10-16")) { return "/unit-2/w9.html#_10-15-invertible-counterpoint" }
  if (dt < new Date("2018-10-17")) { return "/unit-2/w9.html#_10-16-drill" }
  if (dt < new Date("2018-10-18")) { return "/unit-2/w9.html#_10-17-cantatas-and-chorale-preludes" }
  if (dt < new Date("2018-10-19")) { return "/unit-2/w9.html#_10-18-drill" }
  if (dt < new Date("2018-10-20")) { return "/unit-2/w9.html#_10-19-jesu-der-du-meine-seele" }

  if (dt < new Date("2018-10-23")) { return "/unit-2/w10.html#_10-22-summing-up" }
  if (dt < new Date("2018-10-24")) { return "/unit-2/w10.html#_10-23-drill-listening-exam-review" }
  if (dt < new Date("2018-10-25")) { return "/unit-2/w10.html#_10-24-listening-exam-2" }
  if (dt < new Date("2018-10-26")) { return "/unit-2/w10.html#_10-25-drill-written-exam-review" }
  if (dt < new Date("2018-10-27")) { return "/unit-2/w10.html#_10-26-written-exam-2" }

  if (dt < new Date("2018-10-30")) { return "/unit-3/w11.html#_10-29-the-classical-era" }
  if (dt < new Date("2018-10-31")) { return "/unit-3/w11.html#_10-30-drill-listening-exam-review" }
  if (dt < new Date("2018-11-01")) { return "/unit-3/w11.html#_10-31-phrase-types" }
  if (dt < new Date("2018-11-02")) { return "/unit-3/w11.html#_11-01-no-drill" }
  if (dt < new Date("2018-11-03")) { return "/unit-3/w11.html#_11-02-no-lecture" }

  return "/unit-3/"
}
