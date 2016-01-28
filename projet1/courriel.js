
var etat = {
  "inbox": [
    {
      "from": "AF22111212232211122",
      "date": "2015 12 28 20:15:42",
      "msg": "Un court message ...." },
    {
      "from": "AF22111212232211122",
      "date": "2016 01 03 10:15:31",
      "msg": "Un autre message ...." } ],
  "outbox": [
    {
      "to": "AF22111212232211122",
      "date": "2016 01 12 20:15:42",
      "msg": "Bla bla bla ...." } ],
  "yp": {
    "AF22111212232211122": {"name": "Jean Fanchon"},
    "90221F212A4200001AA": {"name": "Bob"} }
};

function onButtonInboxClick(){
  alert("Inbox");
}

function onButtonOutboxClick(){
  alert("outbox");
}

function onButtonYpClick(){
  alert("Yp");
}
