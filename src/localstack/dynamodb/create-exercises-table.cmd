aws dynamodb --endpoint-url=http://localhost:4566 create-table \
    --table-name Exercises \
    --attribute-definitions \
        AttributeName=id,AttributeType=S \
        AttributeName=target,AttributeType=S \
    --key-schema \
        AttributeName=id,KeyType=HASH \
        AttributeName=target,KeyType=RANGE \
--provisioned-throughput \
        ReadCapacityUnits=10,WriteCapacityUnits=5