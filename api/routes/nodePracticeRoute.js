"use strict"
module.exports = function (app) {
    var nodePractice = require("C:/Users/inbanadmin/Desktop/nodePractice/api/controllers/nodePracticeController");

    //routes
    app.route("/tasks")
        .get(nodePractice.list_All_tasks)
        .post(nodePractice.create_a_task);


    app.route("/tasks/:taskId")
        .get(nodePractice.read_a_task)
        .put(nodePractice.update_a_task)
        .delete(nodePractice.delete_a_task);


    app.route("/tickets")
        .get(nodePractice.list_All_tickets)
        .post(nodePractice.create_a_ticket);

    app.route("/tickets/:ticketId")
        .get(nodePractice.read_a_task)
        .put(nodePractice.update_a_task)
        .delete(nodePractice.delete_a_ticket);

    app.route("/customerTemp")
        .get(nodePractice.get_customer_temp)
        .post(nodePractice.create_customer_temp)

    app.route("/ATTIncidentsBypartners")
        .get(nodePractice.get_att_partner_incidents)
        .post(nodePractice.post_att_partner_incidents)

    app.route("/ATTIncidentsBypartners/:incidentId")
        .delete(nodePractice.delete_att_partner_incidents)


    app.route("/JasperIncidentsBypartners")
        .get(nodePractice.get_jasper_partner_incidents)
        .post(nodePractice.post_jasper_partner_incidents)

    app.route("/JasperIncidentsBypartners/:incidentId")
        .delete(nodePractice.delete_jasper_partner_incidents)

    app.route("/allIncidentsBypartners")
        .get(nodePractice.get_all_partner_incidents)
        .post(nodePractice.post_all_partner_incidents)
};
