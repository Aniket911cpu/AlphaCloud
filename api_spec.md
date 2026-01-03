# NexusCloud API Specification

**Version:** v1 (Alpha)
**Protocol:** gRPC (Primary), REST (Gateway)

## Compute Service

### create_instance
Provision a new virtual machine droplet.

**Method:** `POST /v1/instances`

**Parameters:**
- `name` (string, required): Hostname for the instance.
- `region` (string, required): Datacenter slug (e.g., `nyc1`, `sfo3`).
- `size` (string, required): Instance size slug (e.g., `s-1vcpu-1gb`).
- `image` (string, required): OS image slug (e.g., `ubuntu-22-04`).
- `ssh_keys` (string[], optional): List of SSH key fingerprints.

**Response:**
```json
{
  "instance": {
    "id": "inst-a1b2",
    "status": "provisioning",
    "ipv4_address": null
  }
}
```

### list_instances
List all instances for a project.

**Method:** `GET /v1/instances`

**Response:**
```json
{
  "instances": [
    {
      "id": "inst-a1b2",
      "name": "web-01",
      "status": "active",
      "ipv4_address": "192.168.1.10"
    }
  ]
}
```

### delete_instance
Destroy a droplet.

**Method:** `DELETE /v1/instances/{id}`

**Response:**
```json
{
  "success": true
}
```

## Storage Service (S3 Compatible)

### list_buckets
**Method:** `GET /v1/storage/buckets`

### create_bucket
**Method:** `POST /v1/storage/buckets`
