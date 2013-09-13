#jquery-activeurl#

##Installation##
npm install -g grunt-cli  or sudo npm install -g grunt-cli
git clone http://github.com/flrngel/jquery-activeurl.git
cd jquery-activeurl
grunt clean
grunt

##Usage & Examples##
$(".needDrugs").activeurl();


##Options#
attr: attribute name for RegExp match with URL
class: class name to add when attr matches
callback: callback function calling after activeurl

##License##
