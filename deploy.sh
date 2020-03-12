#!/bin/bash

# echo "FAKE DEPLOY!"

echo "Installing dev packages for frontend..."
pushd frontend
npm install

echo "Compiling..."
npx tsc

echo "Building prod fontend..."
npm run prod
popd

pushd backend
echo "Installing dev packages..."
mkdir build
npm install

# build js
echo "Compiling..."
npx tsc

# install dependencies (prod only)
echo "Copying files..."
cp package*.json build/
cp ../frontend/dist/* build/

pushd build
echo "Installing prod packages..."
npm install --only=prod
popd
popd

# deploy new lambda zip
pushd infra
echo "Deploying to AWS..."
terraform init -input=false
# TODO: check that terraform plan output is only lambda
# and fail if other infra changes
terraform plan -out=tfplan -input=false
terraform apply "tfplan"
popd

echo "Done!"