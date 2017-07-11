var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var TicketSchema = new Schema({
    name: {
        type: String,
        enum: ["Open Tickets", "Closed Tickets", "Chronic", "Outage/sev-1 tickets", "Customers Impacted"],
        Required: "Kindly enter the name of tickets"
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    /* status:{
        type:[{
            type: String,
            enum:["pending","ongoing","completed"]
        }],
//        default:["pending"]
    }*/
    count: {
        type: String,
        Required: "Kindly enter the number of tickets"
    }
});

var customerTemperature = new Schema({
    key: {
        type: String
    },
    y: {
        type: String
    },
    color: {
        type: String
    }
});

var attPartnersIncidents = new Schema({
    key: {
        type: String
    },
    color: {
        type: String
    },
    values: [{
        "label": String,
        "value": String
    }]
});

var jasperPartnersIncidents = new Schema({
    key: {
        type: String
    },
    color: {
        type: String
    },
    values: [{
        "label": String,
        "value": String
    }]
});

var allPartnersIncidents = new Schema({
    key: {
        type: String
    },
    color: {
        type: String
    },
    values: [{
            "label": String,
            "value": String
    },
        {
            "label": String,
            "value": String
           }]
})

module.exports = mongoose.model("Tasks", TicketSchema);
module.exports = mongoose.model("customerTemp", customerTemperature);
module.exports = mongoose.model("attPartnersIncidents", attPartnersIncidents);
module.exports = mongoose.model("jasperPartnersIncidents", jasperPartnersIncidents);
module.exports = mongoose.model("allPartnersIncidents", allPartnersIncidents);
