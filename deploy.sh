#!/bin/bash

echo "Installing dev packages for frontend..."
pushd frontend
npm install || exit

echo "Compiling..."
npx tsc || exit

echo "Building prod fontend..."
npm run prod || exit
popd

pushd backend
echo "Installing dev packages..."
mkdir build
npm install

# build js
echo "Compiling..."
npx tsc || exit

# install dependencies (prod only)
echo "Copying files..."
cp package*.json build/
cp ../frontend/dist/* build/

pushd build
echo "Installing prod packages..."
npm install --only=prod || exit
popd
popd

# deploy new lambda zip
pushd infra
echo "Deploying to AWS..."
terraform init -input=false || exit
# TODO: check that terraform plan output is only lambda
# and fail if other infra changes
TF_VAR_pw_secret_id=$PASSWORDS_SECRET_ID terraform plan -out=tfplan -input=false || exit
TF_VAR_pw_secret_id=$PASSWORDS_SECRET_ID terraform apply "tfplan" || exit
popd

echo "Done!"
