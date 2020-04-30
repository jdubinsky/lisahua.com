resource "aws_s3_bucket" "static" {
  bucket = "lhua-static"

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = ["https://www.lisahua.com", "http://localhost:9000"]
    expose_headers  = ["ETag"]
    max_age_seconds = 3000
  }
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
  key    = "images/${each.value}"
  source = "../frontend/assets/images/${each.value}"
  etag   = filemd5("../frontend/assets/images/${each.value}")
}

resource "aws_s3_bucket_object" "static_magnet_images" {
  for_each = fileset("../frontend/assets/images/magnet/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/magnet/${each.value}"
  source = "../frontend/assets/images/magnet/${each.value}"
  etag   = filemd5("../frontend/assets/images/magnet/${each.value}")
}

resource "aws_s3_bucket_object" "static_canvass_images" {
  for_each = fileset("../frontend/assets/images/canvass/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/canvass/${each.value}"
  source = "../frontend/assets/images/canvass/${each.value}"
  etag   = filemd5("../frontend/assets/images/canvass/${each.value}")
}

resource "aws_s3_bucket_object" "static_homepage_images" {
  for_each = fileset("../frontend/assets/images/homepage/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/homepage/${each.value}"
  source = "../frontend/assets/images/homepage/${each.value}"
  etag   = filemd5("../frontend/assets/images/homepage/${each.value}")
}

resource "aws_s3_bucket_object" "static_fonts" {
  for_each = fileset("../frontend/assets/fonts/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "fonts/${each.value}"
  source = "../frontend/assets/fonts/${each.value}"
  etag   = filemd5("../frontend/assets/fonts/${each.value}")
}

resource "aws_s3_bucket_object" "static_resume" {
  bucket = aws_s3_bucket.static.id
  key    = "resume.pdf"
  source = "../frontend/assets/resume.pdf"
  etag   = filemd5("../frontend/assets/resume.pdf")
}

resource "aws_s3_bucket_object" "static_js" {
  bucket = aws_s3_bucket.static.id
  key    = "app.bundle.js"
  source = "../frontend/dist/app.bundle.js"
  etag   = filemd5("../frontend/dist/app.bundle.js")
}
