const axios = require('axios');

const NPSKEY = process.env.APIKEY;

module.exports = {
  getParks: async (req, res) => {
    console.log('REQUEST: ', req);
    let result = await axios({
      method: 'get',
      url: `https://developer.nps.gov/api/v1/parks`,
      params: {
        limit: 100,
        api_key: NPSKEY,
      }
    })
    console.log('RESULT', result)
    res.send(result.data)
  },
  getParksByState: async (req, res) => {
    console.log(req.params.state);
    let state = req.params.state;
    let results = await axios({
      method: 'get',
      url: 'https://developer.nps.gov/api/v1/parks',
      params: {
        stateCode: state,
        limit: 100,
        api_key: NPSKEY,
      }
    })
    res.send(results.data);
  }
}