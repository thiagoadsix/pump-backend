aws dynamodb --endpoint-url=http://localhost:4566 create-table \
    --table-name Exercises \
    --attribute-definitions AttributeName=id,AttributeType=S AttributeName=target,AttributeType=S AttributeName=equipment,AttributeType=S AttributeName=bodyPart,AttributeType=S \
    --key-schema AttributeName=id,KeyType=HASH \
    --provisioned-throughput \            
        ReadCapacityUnits=10,WriteCapacityUnits=5 \
    --global-secondary-indexes \   
        "[                              
            {                                                      
                \"IndexName\": \"target-index\",
                \"KeySchema\": [
                    {\"AttributeName\":\"target\",\"KeyType\":\"HASH\"}
                ],
                \"Projection\": {
                    \"ProjectionType\":\"INCLUDE\",
                    \"NonKeyAttributes\":[\"id\"]
                },
                \"ProvisionedThroughput\": {
                    \"ReadCapacityUnits\": 10,
                    \"WriteCapacityUnits\": 5
                }
            },
            {
                \"IndexName\": \"equipment-index\",
                \"KeySchema\": [
                    {\"AttributeName\":\"equipment\",\"KeyType\":\"HASH\"}
                ],
                \"Projection\": {
                    \"ProjectionType\":\"INCLUDE\",
                    \"NonKeyAttributes\":[\"id\"]
                },
                \"ProvisionedThroughput\": {
                    \"ReadCapacityUnits\": 10,
                    \"WriteCapacityUnits\": 5
                }
            },
            {
                \"IndexName\": \"bodyPart-index\",
                \"KeySchema\": [
                    {\"AttributeName\":\"bodyPart\",\"KeyType\":\"HASH\"}
                ],
                \"Projection\": {
                    \"ProjectionType\":\"INCLUDE\",
                    \"NonKeyAttributes\":[\"id\"]
                },
                \"ProvisionedThroughput\": {
                    \"ReadCapacityUnits\": 10,
                    \"WriteCapacityUnits\": 5
                }
            }
        ]"