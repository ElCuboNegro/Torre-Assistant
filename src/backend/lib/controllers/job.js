const db = require('../models');
const jwt = require('jsonwebtoken');
const api = require('../api/torre');
const Job = db.Job;

const controller = {

  getOffers: async (req, res) => {
    try {
      const token = req.headers['authorization'].split(' ')[1];
      const offset = req.params.offset || 0;
      const user = jwt.decode(token);
      const jobs = await api.jobSearch(offset, user.torre_user);
      const offers = jobs.results;
      return res.status(200).json(offers);
    } catch (e) {
      return res.status(500).json({error: `${e}`});
    }
  },
  getAllOffers: async (req, res) => {
    try {
      const token = req.headers['authorization'].split(' ')[1];
      const user = jwt.decode(token);
      console.log(user);
      const email = user.email;
      const jobs = await Job.findAll({where: {email}});
      console.log(jobs);
      return res.status(200).json(jobs);
    } catch (e) {
      return res.status(500).json({error: `${e}`});
    }
  },
  saveOffers: async (req, res) => {
    try {
      const token = req.headers['authorization'].split(' ')[1];
      const user = jwt.decode(token);
      const email = user.email;
      const {id, compensation, skills, objective} = req.body;

      const tx = await Job.findAll({where: {email: email, torreId: id}});
      if (tx.length) {
        return res.status(200).json();
      }
      const skill = JSON.stringify(skills);

      const job = {
        email: email,
        torreId: id,
        objective: objective,
        skills: skill,
      };
      job.organization = req.body.organizations[0].name;
      job.picture = req.body.organizations[0].picture;
      if (compensation.data) {
        job.currency = compensation.data.currency;

        if (compensation.data.minAmount) {
          job.compensation_min = parseInt(compensation.data.minAmount);
        }
        if (compensation.data.maxAmount) {
          job.compensation_max = parseInt(compensation.data.maxAmount);
        }
      }
      await Job.create(job);


      return res.status(200).json();
    } catch (e) {
      return res.status(500).json({error: `${e}`});
    }
  },

};
module.exports = controller;
