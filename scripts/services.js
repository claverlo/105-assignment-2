$("#servicesForm").submit(function (event) {

  event.preventDefault();
  $("#serviceName").css("border", "");
  $("#serviceDescription").removeAttr("style");
  $("#servicePrice").removeAttr("style");

  const name = $("#serviceName").val().trim();
  const description = $("#serviceDescription").val().trim();
  const price = $("#servicePrice").val();

  let isValid = true;

  if (!name) {
    $("#serviceName").css("border", "3px solid red");
    isValid = false;
  }

  if (!description) {
    $("#serviceDescription").css("border", "3px solid red");
    isValid = false;
  }

  if (!price || price <= 0) {
    $("#servicePrice").css("border", "3px solid red");
    isValid = false;
  }

  if (isValid) {
    let services = JSON.parse(localStorage.getItem("services")) || [];
    services.push(new Service(name, description, price));
    localStorage.setItem("services", JSON.stringify(services));

    this.reset();

    $("#serviceName").css("border", "");
    $("#serviceDescription").removeAttr("style");
    $("#servicePrice").removeAttr("style");
  }
});
