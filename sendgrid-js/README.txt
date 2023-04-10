# prerequisites

Set your enviromnet variable SENDGRID with the API key

SENDGRID="<put your api key>"
FROM=<your autorized sender>
TO=<your destitation>

then deploy with 

wsk project deploy

# send email using node https

Then deploy with:

wsk action update sendgrid  index.js -p sendgrid $SENDGRID -p from $FROM -p to $TO --web=true

Invoke with:

wsk action invoke sendgrid -r


