set -e

bucket=react-todo-app-s3-hosting
region=ap-south-1
out_dir=build


echo "creating a bucket $bucket"
# create a bucket with the name
aws s3 mb s3://$bucket \
  --region $region 


echo "creating bucket policy"
# create public read bucket policy
aws s3api put-bucket-policy \
  --bucket $bucket \
  --policy file://s3-bucket-policy.json


# upload the files from build folder
echo "Going to $out_dir folder...."
cd $out_dir && aws s3 sync --acl public-read . s3://$bucket 
echo "Upload finished"

# return the root folder of the project
cd ..

# enable static website hosting
echo "enabling static website hosting"
aws s3 website s3://$bucket --index-document index.html

echo "done"
