aws dynamodb --endpoint-url=http://localhost:4566 create-table \
  --table-name Workouts \
  --attribute-definitions \
    AttributeName=id,AttributeType=S \
    AttributeName=userId,AttributeType=S \
  --key-schema \
    AttributeName=id,KeyType=HASH \
    AttributeName=userId,KeyType=RANGE \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5