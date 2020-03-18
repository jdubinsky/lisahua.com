
install-fe:
	pushd frontend && npm install && popd

build-prod-fe:
	pushd frontend && npm run prod && popd

compile-fe:
	pushd frontend && tsc && popd

install-be:
	pushd backend && npm install && popd

compile-be:
	pushd backend && tsc && popd

build-prod-be:
	pushd backend && mkdir && popd
	pushd backend && cp package*.json build/ && popd
	pushd backend && cp ../frontend/dist/* build/ && popd
	pushd backend && npm install --only=prod && popd

infra-plan:
	pushd infra && terraform init -input=false && popd
	pushd infra && terraform plan -out=tfplan -input=false && popd

infra-apply:
	pushd infra && terraform apply "tfplan" && popd
