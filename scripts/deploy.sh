# build the application
echo "Building the app..."
npm run build

echo "Uploading to s3..."
# copy everything to s3, but the js bundle
aws s3 cp ./dist/ s3://$BUCKET --recursive --exclude "*.js"

# gzip the js bundle
echo "Gzip and upload the bundle..."
gzip -9 ./dist/main.bundle.js
# uploading the gzipped bundle to aws
aws s3 cp ./dist/main.bundle.js.gz s3://$BUCKET/main.bundle.js --content-encoding gzip --content-type text/javascript 

# Done!
echo "Great success!"
