var states;
$("#jq").click(function(){
    var api = 'https://cdn-api.co-vin.in/api/v2/admin/location/states';
    $.getJSON( api, function( json ) {
        console.log(json.states)
        states = json.states;
       });
});
function putstate(){
    $.each(states, function (i) {
        console.log(states[i]);
        var statename = JSON.stringify(states[i].state_name);
        var stateid = JSON.stringify(states[i].state_id);
        temp = '<option value='+stateid+'>'+statename+'</option>';
        $('#tbody2').append(temp);
            });
}
// var val = document.getElementById('tbody2');
var test; 
var temp ="";
var districts;

$("#get-dist").click(function(){
    test = $("#tbody2 :selected").val();
    console.log(test);
    var api = 'https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+test;
    $.getJSON( api, function( json ) {
        console.log(json.districts)
        districts = json.districts;
        // console.log( "JSON Data: " + json.states[1].state_id + json.states[1].state_name );
       });
});
$("#put-dist").click(function(){
    $.each(districts, function (i) {
        console.log(districts[i]);
        var distname = JSON.stringify(districts[i].district_name);
        var distid = JSON.stringify(districts[i].district_id);
        temp = '<option value='+distid+'>'+distname+'</option>';
        $('#tbody1').append(temp);
            });
})