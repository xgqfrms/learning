# Cursor Methods  

https://docs.mongodb.com/manual/reference/method/#cursor  
https://docs.mongodb.com/manual/reference/method/js-cursor/  



cursor.addOption()
# Adds special wire protocol flags that modify the behavior of the query.’

cursor.batchSize()
# Controls the number of documents MongoDB will return to the client in a single network message.

cursor.close()
# Close a cursor and free associated server resources.

cursor.collation()
# Specifies the collation for the cursor returned by the db.collection.find()
#.

cursor.comment()
# Attaches a comment to the query to allow for traceability in the logs and the system.profile collection.

cursor.count()
# Modifies the cursor to return the number of documents in the result set rather than the documents themselves.

cursor.explain()
# Reports on the query execution plan for a cursor.

cursor.forEach()
# Applies a JavaScript function for every document in a cursor.

cursor.hasNext()
# Returns true if the cursor has documents and can be iterated.

cursor.hint()
# Forces MongoDB to use a specific index for a query.

cursor.itcount()
# Computes the total number of documents in the cursor client-side by fetching and iterating the result set.

cursor.limit()
# Constrains the size of a cursor’s result set.

cursor.map()
# Applies a function to each document in a cursor and collects the return values in an array.

cursor.maxScan()
# Specifies the maximum number of items to scan; documents for collection scans, keys for index scans.

cursor.maxTimeMS()
# Specifies a cumulative time limit in milliseconds for processing operations on a cursor.

cursor.max()
# Specifies an exclusive upper index bound for a cursor. For use with cursor.hint()
#

cursor.min()
# Specifies an inclusive lower index bound for a cursor. For use with cursor.hint()
#

cursor.next()
# Returns the next document in a cursor.

cursor.noCursorTimeout()
# Instructs the server to avoid closing a cursor automatically after a period of inactivity.

cursor.objsLeftInBatch()
# Returns the number of documents left in the current cursor batch.

cursor.pretty()
# Configures the cursor to display results in an easy-to-read format.

cursor.readConcern()

# Specifies a read concern for a find()
# operation.

cursor.readPref()
# Specifies a read preference to a cursor to control how the client directs queries to a replica set.

cursor.returnKey()
# Modifies the cursor to return index keys rather than the documents.

cursor.showRecordId()
# Adds an internal storage engine ID field to each document returned by the cursor.

cursor.size()

# Returns a count of the documents in the cursor after applying skip()

# and limit()
# methods.

cursor.skip()
# Returns a cursor that begins returning results only after passing or skipping a number of documents.

cursor.snapshot()
# Forces the cursor to use the index on the _id field. Ensures that the cursor returns each document, with regards to the value of the _id field, only once.

cursor.sort()
# Returns results ordered according to a sort specification.

cursor.tailable()
# Marks the cursor as tailable. Only valid for cursors over capped collections.

cursor.toArray()
# Returns an array that contains all documents returned by the cursor.






