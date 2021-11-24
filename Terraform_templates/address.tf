module "address" {
source = "terraform-google-modules/address/google"
version = "2.0.0"
region = var.region
project_id = var.project_id
self_links = ["https://www.googleapis.com/compute/v1/module.address.addresses"]
}
