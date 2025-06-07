#!/bin/bash

# Start SQL Server
/opt/mssql/bin/sqlservr &

# Function to check if SQL Server is ready
check_sql_server() {
    /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "${MSSQL_SA_PASSWORD}" -C -Q "SELECT 1" &> /dev/null
    return $?
}

# Wait for SQL Server to be ready
echo "Waiting for SQL Server to start..."
sleep 60s

# Try to connect to SQL Server
echo "Checking SQL Server connection..."
for i in {1..30}; do
    if check_sql_server; then
        echo "SQL Server is ready!"
        break
    fi
    echo "Attempt $i: SQL Server not ready yet..."
    sleep 5s
done

# Create database if it doesn't exist
echo "Creating database if it doesn't exist..."
/opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "${MSSQL_SA_PASSWORD}" -C -Q "IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = '${DB_DATABASE}') CREATE DATABASE [${DB_DATABASE}]"

# Run the initialization script
echo "Running initialization script..."
/opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P "${MSSQL_SA_PASSWORD}" -C -d "${DB_DATABASE}" -i /docker-entrypoint-initdb.d/init.sql

if [ $? -eq 0 ]; then
    echo "Initialization script completed successfully."
else
    echo "Error running initialization script."
    exit 1
fi

# Keep container running
tail -f /dev/null 