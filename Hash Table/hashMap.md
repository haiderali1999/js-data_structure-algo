In hash map we store set of data with key value not indices

but some time hash function generate collision reture same indice for

different values to resolve the collision we have two methods

1. Seperate Chaning
2. Linear Probing

Seperate Chaning:
save data of save key in nested array
for example :
darkblue index = 4
salmon index = 4

[[],[], [],[["darkblue],["salmon"]],[]]

Linear Probing:
save data of save key find the next empty slot to save it

for example :
darkblue index = 4
salmon index = 4

[[],[], [],["darkblue],["salmon]]
