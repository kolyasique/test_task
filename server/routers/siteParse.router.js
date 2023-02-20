/* eslint-disable max-len */
const router = require('express').Router();
const axios = require('axios')
const cheerio = require('cheerio')


router.post('/posturl', async (req, res) => {

    const SITE = req.body.siteurl

  try {
    var scriptMask = /<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g
    var linkRelMask = /<link\s+.*rel="stylesheet"+.*>/g
    

     const result = await axios.get(`${SITE}`)
     const forScripts = result.data
     const myScripts = forScripts.match(scriptMask)
     console.log(myScripts)

     const result2 = await axios.get(`${SITE}`)
     const forStyles = result2.data
     const myStyles = forStyles.match(linkRelMask)
     console.log(myStyles)

  
    res.json({myScripts, myStyles})
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;

// res.json({scripts, styleSheets})
