aws --endpoint-url=http://localhost:4566 dynamodb create-table \
    --table-name Workouts \
    --attribute-definitions AttributeName=id,AttributeType=S AttributeName=userId,AttributeType=S \
    --key-schema AttributeName=id,KeyType=HASH AttributeName=userId,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=10,WriteCapacityUnits=5