# CURD  


https://docs.mongodb.com/manual/crud/


https://docs.mongodb.com/manual/mongo/ 




db

use newdb

db.myCollection.insert( { x: 1, y: 2, z:3 } );


<!-- db.getCollection("3test").find() -->

db.myCollection.find()

db.myCollection.find().pretty()

<!-- 
db.print()

db.myCollection.find().printjson()

 -->






https://docs.mongodb.com/manual/tutorial/insert-documents/  

https://docs.mongodb.com/manual/tutorial/query-documents/  
https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/  
https://docs.mongodb.com/manual/tutorial/query-for-null-fields/  
https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/  

https://docs.mongodb.com/manual/tutorial/update-documents/  

https://docs.mongodb.com/manual/tutorial/remove-documents/  

https://docs.mongodb.com/manual/core/bulk-write-operations/  

https://docs.mongodb.com/manual/reference/sql-comparison/  

https://docs.mongodb.com/manual/reference/read-concern/  

https://docs.mongodb.com/manual/reference/write-concern/  

https://docs.mongodb.com/manual/core/crud/  

## Atomicity, consistency, and distributed operations  

原子性，一致性和分布式操作


Atomicity and Transactions
Read Isolation, Consistency, and Recency
Distributed Queries
Distributed Write Operations
Perform Two Phase Commits
Linearizable Reads via findAndModify

## Query Plan, Performance, and Analysis  

Query Plans
Query Optimization
Analyze Query Performance
Write Operation Performance

## Miscellaneous  

Tailable Cursors


