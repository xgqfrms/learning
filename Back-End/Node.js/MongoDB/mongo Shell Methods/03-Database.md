# Database Methods  

https://docs.mongodb.com/manual/reference/method/#database  
https://docs.mongodb.com/manual/reference/method/js-database/  



db.cloneCollection()
# Copies data directly between MongoDB instances. Wraps cloneCollection.

db.cloneDatabase()
# Copies a database from a remote host to the current host. Wraps clone.

db.commandHelp()
# Returns help information for a database command.

db.copyDatabase()
# Copies a database to another database on the current host. Wraps copydb.

db.createCollection()
# Creates a new collection. Commonly used to create a capped collection.

db.createView()
# Creates a view.

db.currentOp()
# Reports the current in-progress operations.

db.dropDatabase()
# Removes the current database.

db.eval()
# Deprecated. Passes a JavaScript function to the mongod instance for server-side JavaScript evaluation.

db.fsyncLock()
# Flushes writes to disk and locks the database to prevent write operations and assist backup operations. Wraps fsync.

db.fsyncUnlock()
# Allows writes to continue on a database locked with db.fsyncLock()

db.getCollection()
# Returns a collection object. Used to access collections with names that are not valid in the mongo shell.

db.getCollectionInfos()
# Returns collection information for all collections in the current database.

db.getCollectionNames()
# Lists all collections in the current database.

db.getLastError()
# Checks and returns the status of the last operation. Wraps getLastError.

db.getLastErrorObj()
# Returns the status document for the last operation. Wraps getLastError.

db.getLogComponents()
# Returns the log message verbosity levels.

db.getMongo()
# Returns the Mongo() connection object for the current connection.

db.getName()
# Returns the name of the current database.

db.getPrevError()
# Returns a status document containing all errors since the last error reset. Wraps getPrevError.

db.getProfilingLevel()
# Returns the current profiling level for database operations.

db.getProfilingStatus()
# Returns a document that reflects the current profiling level and the profiling threshold.

db.getReplicationInfo()
# Returns a document with replication statistics.

db.getSiblingDB()
# Provides access to the specified database.

db.help()
# Displays descriptions of common db object methods.

db.hostInfo()
# Returns a document with information about the system MongoDB runs on. Wraps hostInfo

db.isMaster()
# Returns a document that reports the state of the replica set.

db.killOp()
# Terminates a specified operation.

db.listCommands()
# Displays a list of common database commands.

db.loadServerScripts()
# Loads all scripts in the system.js collection for the current database into the shell session.

db.logout()
# Ends an authenticated session.

db.printCollectionStats()
# Prints statistics from every collection. Wraps db.collection.stats()

db.printReplicationInfo()
# Prints a report of the status of the replica set from the perspective of the primary.

db.printShardingStatus()
# Prints a report of the sharding configuration and the chunk ranges.

db.printSlaveReplicationInfo()
# Prints a report of the status of the replica set from the perspective of the secondaries.

db.repairDatabase()
# Runs a repair routine on the current database.

db.resetError()
# Resets the error message returned by db.getPrevError() and getPrevError.

db.runCommand()
# Runs a database command.

db.serverBuildInfo()
# Returns a document that displays the compilation parameters for the mongod instance. Wraps buildinfo.

db.serverCmdLineOpts()
# Returns a document with information about the runtime used to start the MongoDB instance. Wraps getCmdLineOpts.

db.serverStatus()
# Returns a document that provides an overview of the state of the database process.

db.setLogLevel()
# Sets a single log message verbosity level.

db.setProfilingLevel()
# Modifies the current level of database profiling.

db.shutdownServer()
# Shuts down the current mongod or mongos process cleanly and safely.

db.stats()
# Returns a document that reports on the state of the current database.

db.version()
# Returns the version of the mongod instance.

db.upgradeCheck()
# Performs a preliminary check for upgrade preparedness for a specific database or collection.

db.upgradeCheckAllDBs()
# Performs a preliminary check for upgrade preparedness for all databases and collections.



