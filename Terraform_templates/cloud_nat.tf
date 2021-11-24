module "cloud-nat" {
source = "terraform-google-modules/cloud-nat/google"
version = "~> 1.2"
router = var.router_name
project_id = var.project_id
region = var.region
name = "my-cloud-nat-${var.router_name}"

nat_ip_allocate_option = "MANUAL_ONLY"
nat_ips = module.address.self_links
}