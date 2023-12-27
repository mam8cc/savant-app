npm run build
aws s3 sync ./build s3://cdkstack-hostings3bucketb5664b19-9w2kkz16hiiw --profile molten
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id E3EG209NS1JMZH --paths "/*" --query 'Invalidation.Id' --profile molten)
# aws cloudfront wait invalidation-completed \
#     --distribution-id E3EG209NS1JMZH \
#     --id ${INVALIDATION_ID} \ 
#     --profile molten