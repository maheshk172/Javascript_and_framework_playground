cd \pluralsight\

md \pluralsight\db1
md \pluralsight\db2
md \pluralsight\db3

#//Primary
start "a" mongod --dbpath ./db1 --port 30000 --replSet "demo"

#//Secondary
start "b" mongod --dbpath ./db2 --port 40000 --replSet "demo"

#//Arbiter
start "c" mongod --dbpath ./db3 --port 50000 --replSet "demo"
