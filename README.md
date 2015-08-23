# HearthstoneParser

parses data from file ALLSets.json : http://hearthstonejson.com/
to save it in a mongodb collection.

change data structure from --> { set : [{card}, {card}, ...], ... 
                        to --> [{card}, {card}, ...
  
adds set property to each card data  --> { ..., set : set name (string), ...}

save all data in a mongodb collection. 
