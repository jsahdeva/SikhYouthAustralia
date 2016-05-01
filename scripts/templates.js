this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["app/templates/events.handlebars"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "    <div class=\"col-sm-4\">\n      <div class=\"events\">\n        <p><strong class=\"eventText\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong></p>\n        <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"></img>\n        <ul class=\"list-unstyled\">\n          <li>\n            <span class=\"eventText\">Start Time : "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.start : depth0)) != null ? stack1.time : stack1), depth0))
    + "</span>\n          </li>\n          <li>\n            <span class=\"eventText\">End Time : "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.end : depth0)) != null ? stack1.time : stack1), depth0))
    + "</span>\n          </li>\n          <li>\n            <span class=\"eventText\">Capacity : "
    + alias4(((helper = (helper = helpers.capacity || (depth0 != null ? depth0.capacity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"capacity","hash":{},"data":data}) : helper)))
    + "</span>\n          </li>\n          <li>\n            <address>\n              <strong class=\"eventText\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.venue : depth0)) != null ? stack1.address_1 : stack1), depth0))
    + "</strong><br>\n              <span class=\"eventText\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.venue : depth0)) != null ? stack1.address_2 : stack1), depth0))
    + "</span>\n              <span class=\"eventText\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.venue : depth0)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.venue : depth0)) != null ? stack1.postal_code : stack1), depth0))
    + "</span>\n            </address>\n          </li>\n        </ul>\n        <button class=\"btnEvent\" onclick=\"window.open('"
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "')\">Register</button>\n      </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row text-center\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});