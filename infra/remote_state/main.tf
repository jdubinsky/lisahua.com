provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "tfstate" {
  bucket = "lhua-tfstate"
}

resource "aws_s3_bucket_policy" "tfstate_policy" {
  bucket = "${aws_s3_bucket.tfstate.id}"

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.tfstate.bucket}"
    },
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::${aws_s3_bucket.tfstate.bucket}/terraform.tfstate"
    }
  ]
}
POLICY
}
