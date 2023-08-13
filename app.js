const time = {
  millisecond: 1,
  get secondAsMilliseconds() { return 1e3 * this.millisecond},
  get minuteAsMilliseconds() { return 60 * this.secondAsMilliseconds},
  get hourAsMilliseconds() { return 60 * this.minuteAsMilliseconds},
  get dayAsMilliseconds() { return 24 * this.hourAsMilliseconds },
  get yearAsMilliseconds() { return 365 * this.dayAsMilliseconds}
  
}

const pageView =({ pageURL,pageViewId }) => {
track({pageURL, pageViewId})
}
const track = (args) => {
  console.log(args)
}


const queryString = {
  "pageURL":"https://auth0.com/profile",
  "pageViewId":"02b9b1e8-e0eb-465b-88a2-e428c67e996c",
   "token":"5400c5b6d4c7c0376f36ed7c5ebbc828",
   "svisitor":"26eb2d1730090000a5a67e62a7020000ffb62f00",
   "visitor":"41899dea-9a2d-447b-8aff-fc7e0751bf26",
   "session":"b1da416f-76e9-44d7-8a14-5d6c9517d79a",
   "event":"active_time_track",
   "q":"%7B%22currentTime%22%3A%22Tue%2C%2006%20Jun%202023%2013%3A25%3A46%20GMT%22%2C%22lastTrackTime%22%3A%22Tue%2C%2006%20Jun%202023%2013%3A25%3A37%20GMT%22%2C%22timeSpent%22%3A%229012%22%2C%22totalTimeSpent%22%3A%2258137%22%7D",
   "isIframe":"false",
   "m":"%7B%22description%22%3A%22We%20want%20to%20hear%20from%20you.%20Let%20us%20know%20what%20your%20identity%20and%20access%20management%20needs%20are%20so%20our%20team%20can%20respond%20and%20help%20you%20solve%20them.%20Contact%20us%20today.%22%2C%22keywords%22%3A%22%22%2C%22title%22%3A%22Profile%20-%20Auth0%22%7D",
   "cb":"",
   "r":"https%3A%2F%2Faccounts.google.com%2F", //referrer
   "thirdParty":"%7B%7D",
   "v2":"1",  
}

pageView({
...queryString,
_gd_visitor: null,
_gd_session: null,
_gd_svisitor: null,
_storagePopulated: true,
'6suuid': null,
_an_uid: null,
"_6signalTTL": null,
"_6senseCompanyDetails": null,
})