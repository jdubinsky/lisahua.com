terraform {
  backend "s3" {
    bucket = "lhua-tfstate"
    key    = "terraform/prod/terraform.tfstate"
    region = "us-east-1"
  }
}
