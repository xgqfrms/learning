# Collection Methods  

https://docs.mongodb.com/manual/reference/method/#collection  
https://docs.mongodb.com/manual/reference/method/js-collection/  



db.collection.aggregate()
# Provides access to the aggregation pipeline.

db.collection.bulkWrite()
# Provides bulk write operation functionality.

db.collection.count()
# Wraps count to return a count of the number of documents in a collection or matching a query.

db.collection.copyTo()
# Deprecated. Wraps eval to copy data between collections in a single MongoDB instance.

db.collection.createIndex()
# Builds an index on a collection.

db.collection.dataSize()
# Rturns the size of the collection. Wraps the size field in the output of the collStats.

db.collection.deleteOne()
# Deletes a single document in a collection.

db.collection.deleteMany()
# Deletes multiple documents in a collection.

db.collection.distinct()
# Rturns an array of documents that have distinct values for the specified field.

db.collection.drop()
# Removes the specified collection from the database.

db.collection.dropIndex()
# Removes a specified index on a collection.

db.collection.dropIndexes()
# Removes all indexes on a collection.

db.collection.ensureIndex()

# Deprecated. Use db.collection.createIndex()


db.collection.explain()
# Returns information on the query execution of various methods.

db.collection.find()
# Performs a query on a collection and returns a cursor object.

db.collection.findAndModify()
# Atomically modifies and returns a single document.

db.collection.findOne()
# Performs a query and returns a single document.

db.collection.findOneAndDelete()
# Finds a single document and deletes it.

db.collection.findOneAndReplace()
# Finds a single document and replaces it.

db.collection.findOneAndUpdate()
# Finds a single document and updates it.

db.collection.getIndexes()
# Returns an array of documents that describe the existing indexes on a collection.

db.collection.getShardDistribution()

# Fr collections in sharded clusters, db.collection.getShardDistribution()
# reports data of chunk distribution.

db.collection.getShardVersion()
# Internal diagnostic method for shard cluster.

db.collection.group()
# Deprecated. Provides simple data aggregation function. Groups documents in 
# a collection by a key, and processes the results. Use aggregate()
# for more complex data aggregation.

db.collection.insert()
# Creates a new document in a collection.

db.collection.insertOne()
# Inserts a new document in a collection.

db.collection.insertMany()
# Inserts several new document in a collection.

db.collection.isCapped()
# Reports if a collection is a capped collection.

db.collection.latencyStats()
# Returns latency statistics for a collection.

db.collection.mapReduce()
# Performs map-reduce style data aggregation.

db.collection.reIndex()
# Rebuilds all existing indexes on a collection.

db.collection.replaceOne()
# Replaces a single document in a collection.

db.collection.remove()
# Deletes documents from a collection.

db.collection.renameCollection()
# Changes the name of a collection.

db.collection.save()
# Provides a wrapper around an insert() and update() to insert new documents.

db.collection.stats()
# Reports on the state of a collection. Provides a wrapper around the collStats.

db.collection.storageSize()
# Reports the total size used by the collection in bytes. Provides a wrapper around the storageSize field of the collStats output.

db.collection.totalSize()
# Reports the total size of a collection, including the size of all documents and all indexes on a collection.

db.collection.totalIndexSize()
# Reports the total size used by the indexes on a collection. Provides a wrapper around the totalIndexSize field of the collStats output.

db.collection.update()
# Modifies a document in a collection.

db.collection.updateOne()
# Modifies a single document in a collection.

db.collection.updateMany()
# Modifies multiple documents in a collection.

db.collection.validate()
# Performs diagnostic operations on a collection.















