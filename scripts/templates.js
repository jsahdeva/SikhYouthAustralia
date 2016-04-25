this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["app/templates/events.handlebars"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "    <div class=\"col-sm-4\">\n      <div class=\"events\">\n        <img src= "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.logo : depth0)) != null ? stack1.url : stack1), depth0))
    + " alt= "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.txt : stack1), depth0))
    + ">\n        <p><strong class=\"eventText\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.name : depth0)) != null ? stack1.text : stack1), depth0))
    + "</strong></p>\n        <p class=\"eventText\">Start Time: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.start : depth0)) != null ? stack1.local : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.start : depth0)) != null ? stack1.timezone : stack1), depth0))
    + "</p>\n        <p class=\"eventText\">End Time: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.end : depth0)) != null ? stack1.local : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.end : depth0)) != null ? stack1.timezone : stack1), depth0))
    + "</p>\n        </p>\n        <a href=\""
    + alias2(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"eventText\">More about this event</a>\n        <p class=\"eventText\">Capacity: "
    + alias2(((helper = (helper = helpers.capacity || (depth0 != null ? depth0.capacity : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"capacity","hash":{},"data":data}) : helper)))
    + "</p>\n        <button class=\"btnEvent\">Buy Tickets</button>\n      </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row text-center\">\n"
    + ((stack1 = (helpers.eachEvent || (depth0 && depth0.eachEvent) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.events : depth0),{"name":"eachEvent","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});