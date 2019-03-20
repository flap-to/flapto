FlapTo Resolver
===============

FlapTo lets you name places in the world using the dns system.

This project is the FlapTo webserver. It is used to convert A record hostnames into a map.

Install & Run
-------------

npm i flapto -g
flapto

make sure port 80 is open and has a public ip address. Record that ip, (say 22.22.22.22)

Usage
-----

Lets say you wanted the following to resolve

  biz1.address.company.com to 36.1251958,-115.3150852
  biz2.address.company.com to 32.6743104,-117.1161124

Create a txt record in dns for biz1.address.company.com that looks like

```
"l=36.1251958,-115.3150852"
```

Then create an A record in dns with the entry 22.22.22.22

Create a txt record in dns for biz2.address.company.com that looks like

```
"l=32.6743104,-117.1161124"
```

Then create an A record in dns with the entry 22.22.22.22

Done. Now you can use biz1.address.company.com to share the address with people

Public server
=============

If you put the txt records in dns, but dont want to run a flapto server, just point your A record 50.65.72.243
we host a public server.
