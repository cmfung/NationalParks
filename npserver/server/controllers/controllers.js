const axios = require('axios');

const NPSKEY = process.env.APIKEY;

module.exports = {
  getParks: async (req, res) => {
    let result = await axios({
      method: 'get',
      url: `https://developer.nps.gov/api/v1/parks`,
      params: {
        limit: 100,
        api_key: NPSKEY,
      }
    })
    res.send(result.data)
  },
  getParksByState: async (req, res) => {
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