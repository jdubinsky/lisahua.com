resource "aws_s3_bucket" "static" {
    bucket = "lhua-static"
}

resource "aws_s3_bucket_policy" "static_policy" {
    bucket = aws_s3_bucket.static.id

  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.static.bucket}"
    },
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::${aws_s3_bucket.static.bucket}/*"
    }
  ]
}
POLICY
}

resource "aws_s3_bucket_object" "static_images" {
    for_each = fileset("../frontend/assets/images/", "*")

    bucket = aws_s3_bucket.static.id
    key = "images/${each.value}"
    source = "../frontend/assets/images/${each.value}"
    etag = filemd5("../frontend/assets/images/${each.value}")
}

resource "aws_s3_bucket_object" "static_js" {
    bucket = aws_s3_bucket.static.id
    key = "app.bundle.js"
    source = "../frontend/dist/app.bundle.js"
    etag = filemd5("../frontend/dist/app.bundle.js")
}
