const express = require("express");
const Jdate = require("jalali-date");
const router = express.Router();
const jdate = new Jdate();
const Time = require("../models/time");
const time = new Time(true, true);

const { Currency, Gold } = require("../models/data");

//${jdate.date[0]}/${jdate.date[1]}/${jdate.date[2]}

router.get("/Currency", (req, res) => {
  time.update();
  Currency.find({
    date: `${jdate.date[0]}/${jdate.date[1]}/${jdate.date[2]}`,
    corrent_time: {
      $regex: `^${time.Ftime}`,
    },
  })
    .then((_data) => {
      res.send(_data.slice(0, 5));
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

router.get("/Gold", (req, res) => {
  time.update();
  Gold.find({
    date: `${jdate.date[0]}/${jdate.date[1]}/${jdate.date[2]}`,
    corrent_time: {
      $regex: `^${time.Ftime}`,
    },
  })
    .then((_data) => {
      res.send(_data.slice(0, 3));
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});
module.exports = router;
