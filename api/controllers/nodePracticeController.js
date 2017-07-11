"use strict"

var mongoose = require("mongoose"),
    Task = mongoose.model("Tasks"),
    customerTemp = mongoose.model("customerTemp"),
    attPartnersIncidents = mongoose.model("attPartnersIncidents"),
    jasperPartnersIncidents = mongoose.model("jasperPartnersIncidents"),
    allPartnersIncidents = mongoose.model("allPartnersIncidents");



exports.list_All_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};



exports.create_a_task = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({
        _id: req.params.taskId
    }, req.body, {
        new: true
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_task = function (req, res) {


    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({
            message: 'Task successfully deleted'
        });
    });
};



exports.create_a_ticket = function (req, res) {
    var new_ticket = new Task(req.body);
    new_ticket.save({}, function (err, ticket) {
        if (err)
            res.send(err);
        res.json(ticket);
    });
};


exports.list_All_tickets = function (req, res) {
    Task.find({}, function (err, ticket) {
        if (err)
            res.send(err);
        res.json(ticket);
    });
};

exports.delete_a_ticket = function (req, res) {


    Task.remove({
        _id: req.params.ticketId
    }, function (err, ticket) {
        if (err)
            res.send(err);
        res.json({
            message: 'Task successfully deleted'
        });
    });
};

exports.get_customer_temp = function (req, res) {
    customerTemp.find({}, function (err, temp) {
        if (err)
            res.send(err);
        res.json(temp);
    });
};

exports.create_customer_temp = function (req, res) {
    var new_temp = new customerTemp(req.body);
    new_temp.save({}, function (err, temp) {
        if (err)
            res.send(err);
        res.json(temp);
    });
};


exports.get_att_partner_incidents = function (req, res) {
    attPartnersIncidents.find({}, function (err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};

exports.post_att_partner_incidents = function (req, res) {
    var new_att_incident = new attPartnersIncidents(req.body);
    new_att_incident.save({}, function (err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};

exports.delete_att_partner_incidents = function (req, res) {
    attPartnersIncidents.remove({
        _id: req.params.incidentId
    }, function (err, incident) {
        if (err)
            res.send(err);
        res.json({
            message: 'Task successfully deleted'
        });
    });
};


exports.get_jasper_partner_incidents = function (req, res) {
    jasperPartnersIncidents.find({}, function (err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};

exports.post_jasper_partner_incidents = function (req, res) {
    var new_jasper_incident = new jasperPartnersIncidents(req.body);
    new_jasper_incident.save({}, function (err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};

exports.delete_jasper_partner_incidents = function (req, res) {
    jasperPartnersIncidents.remove({
        _id: req.params.incidentId
    }, function (err, incident) {
        if (err)
            res.send(err);
        res.json({
            message: 'Task successfully deleted'
        });
    });
};


exports.get_all_partner_incidents = function (req, res) {
    allPartnersIncidents.find({}, function (err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};

exports.post_all_partner_incidents = function (req, res) {
    var new_incident = new allPartnersIncidents(req.body);
    new_incident.save({}, function (err, incident) {
        if (err)
            res.send(err);
        res.json(incident);
    });
};
