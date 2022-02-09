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
  for_each = fileset("${path.module}/assets/images/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/${each.value}"
  source = "${path.module}/assets/images/${each.value}"
  etag   = filemd5("${path.module}/assets/images/${each.value}")
}

resource "aws_s3_bucket_object" "static_magnet_images" {
  for_each = fileset("${path.module}/assets/images/magnet/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/magnet/${each.value}"
  source = "${path.module}/assets/images/magnet/${each.value}"
  etag   = filemd5("${path.module}/assets/images/magnet/${each.value}")
}

resource "aws_s3_bucket_object" "static_canvass_images" {
  for_each = fileset("${path.module}/assets/images/canvass/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/canvass/${each.value}"
  source = "${path.module}/assets/images/canvass/${each.value}"
  etag   = filemd5("${path.module}/assets/images/canvass/${each.value}")
}

resource "aws_s3_bucket_object" "static_oncall_images" {
  for_each = fileset("${path.module}/assets/images/oncall/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/oncall/${each.value}"
  source = "${path.module}/assets/images/oncall/${each.value}"
  etag   = filemd5("${path.module}/assets/images/oncall/${each.value}")
}

resource "aws_s3_bucket_object" "static_esight_images" {
  for_each = fileset("${path.module}/assets/images/esight/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/esight/${each.value}"
  source = "${path.module}/assets/images/esight/${each.value}"
  etag   = filemd5("${path.module}/assets/images/esight/${each.value}")
}

resource "aws_s3_bucket_object" "static_syrup_images" {
  for_each = fileset("${path.module}/assets/images/syrup/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/syrup/${each.value}"
  source = "${path.module}/assets/images/syrup/${each.value}"
  etag   = filemd5("${path.module}/assets/images/syrup/${each.value}")
}

resource "aws_s3_bucket_object" "static_homepage_images" {
  for_each = fileset("${path.module}/assets/images/homepage/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "images/homepage/${each.value}"
  source = "${path.module}/assets/images/homepage/${each.value}"
  etag   = filemd5("${path.module}/assets/images/homepage/${each.value}")
}

resource "aws_s3_bucket_object" "static_fonts" {
  for_each = fileset("${path.module}/assets/fonts/", "*")

  bucket = aws_s3_bucket.static.id
  key    = "fonts/${each.value}"
  source = "${path.module}/assets/fonts/${each.value}"
  etag   = filemd5("${path.module}/assets/fonts/${each.value}")
}

resource "aws_s3_bucket_object" "static_resume" {
  bucket = aws_s3_bucket.static.id
  key    = "resume.pdf"
  source = "${path.module}/assets/resume.pdf"
  etag   = filemd5("${path.module}/assets/resume.pdf")
}

resource "aws_s3_bucket_object" "static_js" {
  bucket = aws_s3_bucket.static.id
  key    = "app.bundle.js"
  source = "${path.module}/app.bundle.js"
  etag   = filemd5("${path.module}/app.bundle.js")
}
